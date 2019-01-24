FROM node:10.15.0 as react-build
WORKDIR '/app'
COPY package.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]
