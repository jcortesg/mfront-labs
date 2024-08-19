FROM node:21.5.0

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000 8080

CMD ["npm", "start"]
