FROM chainguard/node:latest AS base

# Install deps only when needed
FROM base AS deps

WORKDIR /app

# Install deps
COPY package.json package-lock.json ./

RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Mount secret env file (BuildKit-only)
RUN --mount=type=secret,id=envfile \
    export $(cat /run/secrets/envfile | xargs) && \
    npm run build

ENV NEXT_TELEMETRY_DISABLED=1

# Production image
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1


COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static


EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["server.js"]

