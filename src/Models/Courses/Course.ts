import { CourseExercise } from './CourseExercise';

export interface Course {
  title: string;
  userId: string;
  maxScore: number;
  minScore: number;
  exercises: CourseExercise[];
  description: string;
  estimatedTime: string;
}
