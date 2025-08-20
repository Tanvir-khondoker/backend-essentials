import express from 'express';
import { studentController } from './student.controller';
const router = express.Router();

// will call a controller function
router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getSingleStudent);

export const studentRoutes = router;
