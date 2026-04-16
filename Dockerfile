# Dockerfile for backend deployment (optional)
# Can be used with Render's Docker runtime

FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY backend/src ./src

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
