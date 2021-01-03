# This file shows how multistep builds work.

# Phase 0 - Prepare the app.

# Pull node image.
FROM node:alpine
# Specify working directory.
WORKDIR app
# Copy `package.json` file to the working directory.
COPY package*.json .
# Install dependencies.
RUN npm install
# Copy rest files to the working directory.
COPY . .
# Build the app.
RUN npm run build

# Phase 1 - Build the final version of the image from instructions below.
# This means that the final image will only contain directories specified during `COPY` command.

# Pull nginx image.
FROM nginx
# In AWS elasticbeanstalk's environment, this means that your app will run on port 80 (something like `-p 80:80).
EXPOSE 80
# Copy specified files from phase 0.
COPY --from=0 /app/build /usr/share/nginx/html

# To run this image in production mode execute `docker run -p 8080:80 image-id`.
# Port `80` is the default port of nginx.
