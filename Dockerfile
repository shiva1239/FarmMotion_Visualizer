FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.4.0
COPY . .
RUN npm run build --prod
CMD ["npm", "start"]
