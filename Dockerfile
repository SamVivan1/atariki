# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# HAPUS --only=production di sini agar devDependencies (Tailwind, PostCSS, dll) ikut terinstal
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Copy built application dari builder stage
# Pastikan kamu sudah mengaktifkan 'output: "standalone"' di next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]