FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY config/ ./config
COPY controllers/ ./controllers
COPY models/ ./models
COPY routes/ ./routes
COPY services/ ./services
COPY public/ ./public
COPY server.js ./

EXPOSE 5000

CMD ["npm", "start"]