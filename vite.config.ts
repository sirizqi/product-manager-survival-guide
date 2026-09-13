import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const WEBHOOK_TOKEN = '6ccda757-ed64-452d-8804-2761fe40c814'

function kreateWebhookPlugin(): Plugin {
  const recentDonations: any[] = []
  const sseClients = new Set<any>()

  function broadcast(donation: any) {
    recentDonations.unshift(donation)
    if (recentDonations.length > 50) recentDonations.pop()
    const msg = `event: donation\ndata: ${JSON.stringify(donation)}\n\n`
    for (const client of sseClients) {
      try {
        client.write(msg)
      } catch {
        sseClients.delete(client)
      }
    }
  }

  return {
    name: 'kreate-webhook-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlObj = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`)
        const pathname = urlObj.pathname

        if (req.method === 'GET' && pathname === '/api/donations/stream') {
          res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
          })
          res.write(': connected\n\n')
          sseClients.add(res)
          req.on('close', () => sseClients.delete(res))
          return
        }

        if (req.method === 'GET' && pathname === '/api/donations/latest') {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          return res.end(JSON.stringify({ donations: recentDonations }))
        }

        if (req.method === 'POST' && (pathname === '/api/webhook/kreate' || pathname === '/api/webhook')) {
          let body = ''
          req.on('data', (chunk) => (body += chunk))
          req.on('end', () => {
            try {
              const data = body ? JSON.parse(body) : {}
              const authHeader = req.headers['authorization'] || ''
              const bearerToken = (authHeader as string).replace(/^Bearer\s+/i, '').trim()
              const headerToken = (req.headers['x-webhook-token'] || req.headers['x-kreate-token'] || bearerToken) as string
              const queryToken = urlObj.searchParams.get('token')
              const bodyToken = data?.token

              const isAuthorized = [headerToken, queryToken, bodyToken].some((t) => t === WEBHOOK_TOKEN)

              if (!isAuthorized) {
                res.writeHead(401, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ error: 'Unauthorized: Invalid token' }))
              }

              const payloadData = data.data || data
              const donation = {
                id: payloadData.id || `tip_${Date.now()}`,
                amount: Number(payloadData.amount) || 0,
                currency: payloadData.currency || 'IDR',
                message: payloadData.message || '',
                sender: payloadData.sender || 'Teman Anonim',
                timestamp: payloadData.timestamp || new Date().toISOString(),
              }

              broadcast(donation)
              res.writeHead(200, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ success: true, message: 'Tip broadcasted', data: donation }))
            } catch (err: any) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ error: err.message }))
            }
          })
          return
        }

        if (req.method === 'POST' && pathname === '/api/donations/test') {
          let body = ''
          req.on('data', (chunk) => (body += chunk))
          req.on('end', () => {
            try {
              const data = body ? JSON.parse(body) : {}
              const testDonation = {
                id: `tip_test_${Date.now()}`,
                amount: Number(data.amount) || 25000,
                currency: data.currency || 'IDR',
                message: data.message || 'Semangat terus nulis playbook PM-nya bang Rizqi!',
                sender: data.sender || 'Teman PM',
                timestamp: new Date().toISOString(),
              }
              broadcast(testDonation)
              res.writeHead(200, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ success: true, donation: testDonation }))
            } catch (err: any) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ error: err.message }))
            }
          })
          return
        }

        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), kreateWebhookPlugin()],
})
