FROM node:16.3.0-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install --save --legacy-peer-deps 
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install -g serve
CMD ["serve","-s","build" ]

