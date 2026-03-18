FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# Open port 3000
EXPOSE 3000

# Command to run the app
CMD [ "npm", "start" ]
