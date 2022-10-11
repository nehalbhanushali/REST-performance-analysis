FROM node:16.15-alpine3.14
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8888
CMD ["node", "--require", "./tracing.js", "./app.js"]
#RUN node --require ./tracing.js app.js
