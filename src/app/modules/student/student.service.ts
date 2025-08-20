import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);

  return result;
};

const getallStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id: id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getallStudentsFromDB,
  getSingleStudentFromDB,
};
