FROM node:11-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY src src

EXPOSE 3000

CMD ["node", "src/index.js"]