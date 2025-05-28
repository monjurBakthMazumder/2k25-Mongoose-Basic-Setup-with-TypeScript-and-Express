// student.service.ts

import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

/**
 * Service to create a new student document in the database.
 * @param studentData - validated student data
 * @returns the created student document
 */
const createStudent = async (studentData: IStudent): Promise<IStudent> => {
  const createdStudent = await StudentModel.create(studentData);
  return createdStudent;
};

/**
 * Service to retrieve all student documents.
 * @returns array of students
 */
const getAllStudents = async (): Promise<IStudent[]> => {
  const students = await StudentModel.find().lean();
  return students;
};

/**
 * Service to get a single student by their ID.
 * @param studentId - the unique student ID
 * @returns the student document or null if not found
 */
const getStudentById = async (studentId: string): Promise<IStudent | null> => {
  const student = await StudentModel.findOne({ studentId }).lean();
  return student;
};

/**
 * Service to update a student by ID.
 * @param studentId - the unique student ID
 * @param updateData - partial student data to update
 * @returns updated student document or null if not found
 */
const updateStudentById = async (
  studentId: string,
  updateData: Partial<IStudent>
): Promise<IStudent | null> => {
  const updatedStudent = await StudentModel.findOneAndUpdate(
    { studentId },
    updateData,
    { new: true } // Return the updated document
  ).lean();

  return updatedStudent;
};

/**
 * Service to delete a student by ID.
 * @param studentId - the unique student ID
 * @returns deleted student document or null if not found
 */
const deleteStudentById = async (studentId: string): Promise<IStudent | null> => {
  const deletedStudent = await StudentModel.findOneAndDelete({ studentId }).lean();
  return deletedStudent;
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
