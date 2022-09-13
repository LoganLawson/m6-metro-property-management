FROM node:18-alpine
RUN mkdir backend/
WORKDIR  /backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]