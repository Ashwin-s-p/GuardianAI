FROM node:18-slim

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy source code only (ignore videos)
COPY src/ ./src
COPY public/*.html ./public

EXPOSE 5000

CMD ["npm", "start"]