FROM node:18.15.0-alpine3.17

RUN mkdir /service-comment
WORKDIR /service-comment

COPY package*.json .
RUN npm ci

COPY . .
