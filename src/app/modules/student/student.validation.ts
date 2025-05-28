// student.validation.ts

import { z } from 'zod';

// Define the schema for the nested "name" object
const userNameSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
});

// Define the schema for the "guardian" object
const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required'),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherContactNo: z.string().min(1, 'Father contact number is required'),
  motherName: z.string().min(1, 'Mother name is required'),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherContactNo: z.string().min(1, 'Mother contact number is required'),
});

// Define the schema for the "localGuardian" object
const localGuardianSchema = z.object({
  name: z.string().min(1, 'Local guardian name is required'),
  occupation: z.string().min(1, 'Local guardian occupation is required'),
  contactNo: z.string().min(1, 'Local guardian contact number is required'),
  address: z.string().min(1, 'Local guardian address is required'),
});

// Enum values for blood groups
const bloodGroupEnum = z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);

// Enum values for gender
const genderEnum = z.enum(['male', 'female']);

// Enum values for status
const statusEnum = z.enum(['active', 'blocked']);

// Main schema for creating a student
export const createStudentSchema = z.object({
  studentId: z.string().min(1, 'Student ID is required'),
  name: userNameSchema,
  gender: genderEnum,
  dateOfBirth: z.string().optional(),
  email: z.string().email('Invalid email address'),
  contactNo: z.string().min(1, 'Contact number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
  bloodGroup: bloodGroupEnum.optional(),
  presentAddress: z.string().min(1, 'Present address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: statusEnum,
});

// For update, allow partial updates (all fields optional)
export const updateStudentSchema = createStudentSchema.partial();
