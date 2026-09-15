import { Request, Response } from 'express';
import Course from '../models/courseModel';

// Create new course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get all courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get single course
export const getCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};