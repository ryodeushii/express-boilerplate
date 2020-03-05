FROM node:alpine

WORKDIR /app

RUN apk add --no-cache --virtual .gyp python make g++

COPY package*.json ./

RUN npm ci

RUN apk del .gyp

EXPOSE 80

ENV PORT=80
ENV NODE_ENV=production

CMD ["npm", "run","start"]
