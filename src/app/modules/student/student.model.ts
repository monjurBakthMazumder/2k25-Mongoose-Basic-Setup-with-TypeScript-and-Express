// student.model.ts

import { Schema, model, Document, Model } from 'mongoose';
import {
  IStudent,
  IUserName,
  IGuardian,
  ILocalGuardian,
  IBloodGroup,
  IGender,
  IStatus,
} from './student.interface';

/**
 * Extend Mongoose Document to include IStudent fields
 * This interface represents a single Student document in MongoDB
 */
export interface IStudentDocument extends IStudent, Document {}

/**
 * Schema for student's name subdocument
 * Used as a nested schema inside StudentSchema
 */
const userNameSchema = new Schema<IUserName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false }, // optional
    lastName: { type: String, required: true },
  },
  { _id: false } // Disable _id field on this nested schema
);

/**
 * Schema for guardian information (parents)
 * Nested schema to embed guardian details inside student document
 */
const guardianSchema = new Schema<IGuardian>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  { _id: false }
);

/**
 * Schema for local guardian information
 * Another nested subdocument inside the student
 */
const localGuardianSchema = new Schema<ILocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  { _id: false }
);

/**
 * Main Student schema defining the structure of the student collection
 */
const studentSchema = new Schema<IStudentDocument>(
  {
    studentId: {
      type: String,
      required: true,
      unique: true, // Ensure studentId is unique across documents
      index: true, // Create index to improve query performance by studentId
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'], // Restrict gender to these values
      required: true,
    },
    dateOfBirth: {
      type: String, // Consider using Date type if dates are stored as Date objects
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email uniqueness
      lowercase: true, // Save all emails in lowercase for consistency
      trim: true, // Remove surrounding spaces
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Limit blood groups
      required: false,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: true,
    },
    profileImg: {
      type: String,
      required: false,
    },
    isActive: {
      type: String,
      enum: ['active', 'blocked'],
      required: true,
      default: 'active', // Default status for new students
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

/**
 * Export the Mongoose model for Student.
 * This model will be used to interact with the students collection in MongoDB.
 */
export const StudentModel: Model<IStudentDocument> = model<IStudentDocument>(
  'Student',
  studentSchema
);
