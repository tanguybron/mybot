FROM node:12.17
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .