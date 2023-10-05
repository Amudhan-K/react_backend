FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY package-lock.json ./
# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port your backend server runs on
EXPOSE 5000

# Start the backend server
#CMD ["node", "server.js"]
CMD ["node", "start"]
CMD ["node", "index.js"]

