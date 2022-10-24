FROM node:16.15-alpine3.14
WORKDIR /app
COPY . .
RUN echo "installing node modules"
RUN npm install
# RUN echo "migrating data"
# RUN npm run migrate
# RUN echo "running pm2"
# RUN npm run pm2
EXPOSE 3000
CMD ["node", "--require", "./tracing.js", "./bin/www"]
