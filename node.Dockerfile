FROM node:latest

WORKDIR /src

COPY server /src

RUN npm install

EXPOSE 3000

CMD npm start