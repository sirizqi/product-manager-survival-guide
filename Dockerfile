# Stage 1: Build application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code and scripts
COPY . .

# Sync playbooks and build production bundle
RUN npm run build

# Stage 2: Serve application and handle Kreate Webhook API
FROM node:22-alpine

WORKDIR /app

# Copy build artifacts and server script
COPY --from=builder /app/dist ./dist
COPY server.mjs ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80
ENV WEBHOOK_TOKEN=6ccda757-ed64-452d-8804-2761fe40c814

# Expose HTTP port 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:80/healthz || exit 1

CMD ["node", "server.mjs"]
