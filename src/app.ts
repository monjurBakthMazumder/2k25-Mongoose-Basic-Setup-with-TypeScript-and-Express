// Import necessary modules from express and other packages
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Create an Express application instance
const app: Application = express();

// ------------------------------
// Middlewares
// ------------------------------

// Enable parsing of JSON bodies in incoming requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// ------------------------------
// Route Handlers
// ------------------------------

// Define a basic GET route for the root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Export the configured Express app
export default app;
