# Use the official Node.js 18 image as the base
FROM node:18-alpine AS base

# Set the working directory to /app
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies using npm
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the application using Next.js
RUN npm run build

# Create a new stage for the production environment
FROM base AS runner

# Set the working directory to /app
WORKDIR /app

# Copy the built application code to the working directory
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Set the environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Expose the port that the application will use
EXPOSE 3000

# Run the command to start the application
CMD ["npm", "start"]