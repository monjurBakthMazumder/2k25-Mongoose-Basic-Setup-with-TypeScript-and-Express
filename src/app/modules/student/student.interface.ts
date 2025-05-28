// student.interface.ts

/**
 * Represents a student's name.
 * - firstName: Required first name
 * - middleName: Optional middle name
 * - lastName: Required last name
 */
export type IUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

/**
 * Represents the student's guardian information.
 * Includes father's and mother's name, occupation, and contact number.
 */
export type IGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

/**
 * Represents the local guardian information.
 * Typically someone living near the student, providing local support.
 */
export type ILocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

/**
 * Blood group type, restricting to valid blood groups only.
 */
export type IBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

/**
 * Gender type, limited to 'male' or 'female'.
 */
export type IGender = 'male' | 'female';

/**
 * Student status type.
 * 'active' means currently active student,
 * 'blocked' means suspended or inactive.
 */
export type IStatus = 'active' | 'blocked';

/**
 * Main Student interface combining all individual pieces of student data.
 * - studentId: Unique identifier for each student
 * - name: Student's full name object
 * - gender: Gender of the student
 * - dateOfBirth: Optional date of birth string (ISO format recommended)
 * - email: Student's email (unique)
 * - contactNo: Primary contact number
 * - emergencyContactNo: Emergency contact number
 * - bloodGroup: Optional blood group of the student
 * - presentAddress: Current address
 * - permanentAddress: Permanent address
 * - guardian: Guardian info (parents)
 * - localGuardian: Local guardian info
 * - profileImg: Optional URL or path to student's profile image
 * - isActive: Current status of the student
 */
export interface IStudent {
  studentId: string;
  name: IUserName;
  gender: IGender;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: IBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  isActive: IStatus;
}
