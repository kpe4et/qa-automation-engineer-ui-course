import { CourseExercise } from './CourseExercise';

export interface Course {
  id: string;
  title: string;
  userId: string;
  maxScore: number;
  minScore: number;
  exercises: CourseExercise[];
  description: string;
  previewImage: string | null;
  estimatedTime: string;
}
