// student.route.ts

import express from 'express';
import { StudentControllers } from './student.controller';

// Create a new Express router instance
const router = express.Router();

/**
 * Route: POST /
 * Description: Create a new student record
 * Request body should include a 'student' object matching the IStudent interface
 */
router.post('/', StudentControllers.createStudent);

/**
 * Route: GET /
 * Description: Retrieve all student records
 */
router.get('/', StudentControllers.getAllStudents);

/**
 * Route: GET /:studentId
 * Description: Retrieve a student by their studentId
 * URL parameter: studentId - unique identifier of the student
 */
router.get('/:studentId', StudentControllers.getStudentById as express.RequestHandler);

/**
 * Route: PUT /:studentId
 * Description: Update an existing student by studentId
 * URL parameter: studentId - unique identifier of the student
 * Request body should include fields to update inside a 'student' object
 */
router.put('/:studentId', StudentControllers.updateStudentById as express.RequestHandler);

/**
 * Route: DELETE /:studentId
 * Description: Delete a student record by studentId
 * URL parameter: studentId - unique identifier of the student
 */
router.delete('/:studentId', StudentControllers.deleteStudentById as express.RequestHandler);

export const StudentRoutes = router;
