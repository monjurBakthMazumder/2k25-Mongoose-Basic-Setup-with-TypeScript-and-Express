// Load environment variables from a .env file
import dotenv from 'dotenv';

// Utility module for handling file and directory paths
import path from 'path';

// Configure dotenv to load variables from the .env file located at the project root
dotenv.config({ path: path.join(process.cwd(), '.env') });

// Export configuration values for use throughout the application
export default {
  port: process.env.PORT, // Application port number
  database_url: process.env.DATABASE_URL, // MongoDB connection string
};
