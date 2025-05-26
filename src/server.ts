// Import the Express app and configuration
import app from './app';
import config from './app/config';

// Import Mongoose for MongoDB connection
import mongoose from 'mongoose';

// Main function to initialize database connection and start the server
async function main() {
  try {
    // Connect to MongoDB using the URL from configuration
    await mongoose.connect(config.database_url as string);

    // Start the Express server on the configured port
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });

    // Log success message once database is connected
    console.log('Database connected successfully');
  } catch (error) {
    // Log any errors that occur during DB connection or server startup
    console.log(error);
  }

  // Note: Use the following syntax if your MongoDB requires authentication:
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}

// Invoke the main function to run the server
main();
