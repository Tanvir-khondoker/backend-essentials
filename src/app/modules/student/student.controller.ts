import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //   will call service function to send this data
    const result = await studentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    // will call service function to get all students
    const result = await studentServices.getallStudentsFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // will call service function to get single student
    const result = await studentServices.getSingleStudentFromDB(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
    // send response
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve student',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
