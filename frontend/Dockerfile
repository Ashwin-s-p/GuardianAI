# Use lightweight Node image
FROM node:20-slim

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy source code only (ignore node_modules, videos)
COPY src/ ./src
COPY public/ ./public
COPY vite.config.js ./

# Build frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Start frontend in preview mode
CMD ["npm", "run", "preview", "--", "--host"]