import { Router } from 'express';
import { createCourse, getCourses, getCourse, updateCourse, deleteCourse } from '../controllers/courseController';

const router = Router();

router.post('/courses', createCourse);
router.get('/courses', getCourses);
router.get('/courses/:id', getCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

export default router;