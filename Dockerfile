FROM node:11-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY src src

EXPOSE 3000

CMD ["node", "src/index.js"]