# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the React development server port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
