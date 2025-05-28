// student.controller.ts

import { Request, Response } from 'express';
import { z } from 'zod';
import { StudentServices } from './student.service';
import { createStudentSchema, updateStudentSchema } from './student.validation';

/**
 * Controller to create a new student.
 * Validates the input using Zod schema before creating.
 */
const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body against schema
    const validatedData = createStudentSchema.parse(req.body.student);

    // Call service to create student
    const createdStudent = await StudentServices.createStudent(validatedData);

    // Return success response with created student data
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: createdStudent,
    });
  } catch (error) {
    // Handle validation errors separately
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      });
    } else {
      // Handle unexpected errors
      res.status(500).json({
        success: false,
        message: 'Failed to create student',
        error: error instanceof Error ? error.message : error,
      });
    }
  }
};

/**
 * Controller to retrieve all students.
 */
const getAllStudents = async (req: Request, res: Response): Promise<void> => {
  try {
    const students = await StudentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error instanceof Error ? error.message : error,
    });
  }
};

/**
 * Controller to retrieve a single student by studentId.
 */
const getStudentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId } = req.params;
    const student = await StudentServices.getStudentById(studentId);

    if (!student) {
      res.status(404).json({
        success: false,
        message: `Student with id ${studentId} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

/**
 * Controller to update a student by studentId.
 * Validates update data using Zod partial schema.
 */
const updateStudentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId } = req.params;

    // Validate partial update data
    const updateData = updateStudentSchema.parse(req.body.student);

    const updatedStudent = await StudentServices.updateStudentById(studentId, updateData);

    if (!updatedStudent) {
      res.status(404).json({
        success: false,
        message: `Student with id ${studentId} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: updatedStudent,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to update student',
        error: error instanceof Error ? error.message : error,
      });
    }
  }
};

/**
 * Controller to delete a student by studentId.
 */
const deleteStudentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await StudentServices.deleteStudentById(studentId);

    if (!deletedStudent) {
      res.status(404).json({
        success: false,
        message: `Student with id ${studentId} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: deletedStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
