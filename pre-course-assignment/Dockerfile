# We are using node23
FROM node:23

LABEL maintainer="thomastan"

## Build the application
# We create a directory /app
WORKDIR /app
# We are inside /app

# Copy the files and directories
COPY server.js .
COPY *.json .
COPY views views

# Install the dependencies
RUN npm ci

## Run the application
ENV PORT=3000

EXPOSE ${PORT}

ENTRYPOINT node server.js
