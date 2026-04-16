FROM node:20.14.0-bookworm-slim

RUN apt-get update && apt-get install -y \
  vim curl wget git procps \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR ./

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 9000
CMD ["npm", "run", "start"]