FROM node:20-alpine

WORKDIR /app

COPY ./frontend/ ./

RUN npm install

COPY ./frontend/ ./

RUN npm run build

CMD ["npm", "run", "dev"]
