FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN webpack --mode=production
RUN npm ci --only=production

COPY . .

EXPOSE 8080

