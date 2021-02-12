FROM node:14


WORKDIR /usr/src/app

ARG DB_URL
COPY package*.json ./

RUN npm ci --only=production

COPY . .

# RUN npm install --save webpack-cli
# RUN npm run build

ENV DB_URL=${DB_URL}
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]