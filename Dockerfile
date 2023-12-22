# Use an official Node runtime as a parent image
FROM node:18 as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app

# Build the Angular app for production
RUN ng build

# Use an official Nginx runtime as a parent image
FROM nginx:1.21-alpine

# Copy the Angular app build from the 'build' stage to the Nginx web root
COPY --from=build /app/dist/angular-unit-test-app /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
