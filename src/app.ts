// app.ts

// Importing required modules
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

// Initialize the Express application
const app: Application = express();

/**
 * Middleware to parse incoming JSON requests.
 * This allows us to access the JSON body content in req.body.
 */
app.use(express.json());

/**
 * Enable Cross-Origin Resource Sharing (CORS).
 * This allows your API to be accessible from different origins (e.g., frontend apps on other domains).
 */
app.use(cors());

/**
 * Mount the StudentRoutes router on the `/api/v1/students` path.
 * All requests to `/api/v1/students` will be handled by StudentRoutes.
 */
app.use('/api/v1/students', StudentRoutes);

/**
 * Basic route handler for the root path `/`.
 * Useful for health checks or quick confirmation that the API is running.
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
