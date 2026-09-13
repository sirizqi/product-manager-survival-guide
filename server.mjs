import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 80;
const WEBHOOK_TOKEN = process.env.WEBHOOK_TOKEN || '6ccda757-ed64-452d-8804-2761fe40c814';
const DIST_DIR = path.resolve(__dirname, 'dist');

// MIME type dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

// In-memory store for donations and active SSE clients
const recentDonations = [];
const sseClients = new Set();

function broadcastDonation(donation) {
  recentDonations.unshift(donation);
  if (recentDonations.length > 50) recentDonations.pop();

  const message = `event: donation\ndata: ${JSON.stringify(donation)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch {
      sseClients.delete(client);
    }
  }
}

// Keep-alive heartbeat for SSE connections every 25 seconds
setInterval(() => {
  for (const client of sseClients) {
    try {
      client.write(': heartbeat\n\n');
    } catch {
      sseClients.delete(client);
    }
  }
}, 25000);

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body.trim()) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function verifyToken(req, urlObj, body) {
  if (!WEBHOOK_TOKEN) return true;

  const authHeader = req.headers['authorization'] || '';
  const bearerToken = authHeader.replace(/^Bearer\s+/i, '').trim();
  const headerToken = req.headers['x-webhook-token'] || req.headers['x-kreate-token'] || bearerToken;
  const queryToken = urlObj.searchParams.get('token');
  const bodyToken = body?.token;

  return [headerToken, queryToken, bodyToken].some((t) => t === WEBHOOK_TOKEN);
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-webhook-token, x-kreate-token');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // Healthcheck endpoint
  if (pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', time: new Date().toISOString() }));
  }

  // 1. Kreate Webhook Endpoint
  if (req.method === 'POST' && (pathname === '/api/webhook/kreate' || pathname === '/api/webhook')) {
    try {
      const body = await parseJsonBody(req);
      const isAuthorized = verifyToken(req, urlObj, body);

      if (!isAuthorized) {
        console.warn(`[Webhook] Unauthorized webhook attempt: ${req.url}`);
        res.writeHead(401, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Unauthorized: Invalid or missing token' }));
      }

      console.log('[Webhook] Received valid Kreate webhook:', JSON.stringify(body));

      const event = body.event || 'tip_received';
      const data = body.data || body;

      if (event === 'tip_received' || data.amount) {
        const donation = {
          id: data.id || `tip_${Date.now()}`,
          amount: Number(data.amount) || 0,
          currency: data.currency || 'IDR',
          message: data.message || '',
          sender: data.sender || 'Teman Anonim',
          timestamp: data.timestamp || new Date().toISOString(),
        };

        broadcastDonation(donation);
        console.log(`[Webhook] Broadcasted tip from ${donation.sender} (${donation.amount} ${donation.currency})`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, message: 'Tip processed and broadcasted', data: donation }));
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, message: 'Ignored non-tip event' }));
    } catch (err) {
      console.error('[Webhook] Error parsing webhook:', err);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Bad request: Failed to parse JSON' }));
    }
  }

  // 2. SSE Stream Endpoint for Real-Time Overlays
  if (req.method === 'GET' && pathname === '/api/donations/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    });

    res.write(': connected\n\n');
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // 3. Get Recent Donations (REST)
  if (req.method === 'GET' && pathname === '/api/donations/latest') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ donations: recentDonations }));
  }

  // 4. Test / Simulation Endpoint (Trigger overlay for testing)
  if (req.method === 'POST' && pathname === '/api/donations/test') {
    try {
      const body = await parseJsonBody(req);
      const testDonation = {
        id: `tip_test_${Date.now()}`,
        amount: Number(body.amount) || 25000,
        currency: body.currency || 'IDR',
        message: body.message || 'Semangat terus nulis playbook PM-nya bang Rizqi!',
        sender: body.sender || 'Teman PM',
        timestamp: new Date().toISOString(),
      };

      broadcastDonation(testDonation);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, donation: testDonation }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  // 5. Static File Server (dist/) with SPA Fallback
  if (req.method === 'GET' || req.method === 'HEAD') {
    let safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
    if (safePath === '/' || safePath === '') safePath = '/index.html';

    let filePath = path.join(DIST_DIR, safePath);

    // If file exists and is a file, serve it
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      // Cache static assets for 1 year, HTML for 0
      if (safePath.startsWith('/assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        res.setHeader('Cache-Control', 'no-cache');
      }

      res.writeHead(200, { 'Content-Type': contentType });
      if (req.method === 'HEAD') return res.end();
      return fs.createReadStream(filePath).pipe(res);
    }

    // SPA Fallback: serve dist/index.html
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.setHeader('Cache-Control', 'no-cache');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      if (req.method === 'HEAD') return res.end();
      return fs.createReadStream(indexPath).pipe(res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
  }

  res.writeHead(405, { 'Content-Type': 'text/plain' });
  res.end('Method Not Allowed');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] PM Playbooks web server & Kreate webhook listener running on port ${PORT}`);
  console.log(`[Server] Webhook Endpoint: POST /api/webhook/kreate (Token: ${WEBHOOK_TOKEN})`);
});
