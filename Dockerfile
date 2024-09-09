FROM node:20-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./
RUN NODE_OPTIONS="--max_old_space_size=1512" npm run build

FROM node:20-alpine

COPY --from=build /app/build ./build
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --omit dev

ENV ORIGIN=http://localhost:3000

CMD ["node", "build"]
