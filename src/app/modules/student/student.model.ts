import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// ✅ Sub-schema for UserName
const userNameSchema = new Schema<UserName>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    middleName: { type: String }, // optional
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
  },
  { _id: false },
);

// ✅ Sub-schema for Guardian
const guardianSchema = new Schema<Guardian>(
  {
    fatherName: {
      type: String,
      required: [true, "Father's name is required"],
    },
    motherName: {
      type: String,
      required: [true, "Mother's name is required"],
    },
    fatherOccupation: { type: String },
    fatherContactNo: {
      type: String,
      required: [true, "Father's contact number is required"],
    },
    motherOccupation: { type: String },
    motherContactNo: {
      type: String,
      required: [true, "Mother's contact number is required"],
    },
  },
  { _id: false },
);

// ✅ Sub-schema for LocalGuardian
const localGuardianSchema = new Schema<LocalGuardian>(
  {
    name: {
      type: String,
      required: [true, 'Local guardian name is required'],
    },
    occupation: { type: String },
    contactNo: {
      type: String,
      required: [true, 'Local guardian contact number is required'],
    },
    address: {
      type: String,
      required: [true, 'Local guardian address is required'],
    },
  },
  { _id: false },
);

// ✅ Main Student Schema
const studentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    name: {
      type: userNameSchema,
      required: [true, 'Student name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: "Gender must be either 'male' or 'female'",
      },
      required: [true, 'Gender is required'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContact: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        message: 'Invalid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuardianSchema, // optional
    },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'blocked'],
        message: "Status must be either 'active' or 'blocked'",
      },
      default: 'active',
    },
  },
  { timestamps: true },
);

// ✅ Model
export const studentModel = model<Student>('student', studentSchema);
