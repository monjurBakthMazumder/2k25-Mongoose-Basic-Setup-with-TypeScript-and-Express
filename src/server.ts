// server.ts

import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// Get the port from config or fallback to 5000
const PORT = config.port || 5000;
const DATABASE_URL = config.database_url || '';

/**
 * Connect to MongoDB database using Mongoose.
 * Uses the connection string from environment variables.
 * Logs success or failure of connection.
 */
async function connectDatabase() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit process with failure
  }
}

/**
 * Start the Express server.
 * Listens on the specified port and logs the status.
 */
async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1); // Exit process with failure
  }
}

// Invoke the server start function
startServer();
