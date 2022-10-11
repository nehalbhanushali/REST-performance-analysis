# REST-performance-analysis
## Reference
https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
## Set local environment variables for postgres db access.
`export DB_USER="<set-postgres-db-username>"`

`export DB_PASSWORD="<set-postgres-db-password>"`

`cd api/`

`docker compose up -d` # This command uses the docker-compose.yml to do the following:

`# docker build -t restapp .` # This command uses the Dockerfile at ./ to build an image for our app.`

`# docker run -it -p 8888:8888 restapp` # This command runs the app docker container and maps it to localhost port.

Visit http://localhost:8888/users or http://localhost:8888/groups and check the tracing response in your terminal.
## Troubleshooting
### Docker issues

- Error saving credentials: error storing credentials ? Try `brew install docker-credential-helper`
