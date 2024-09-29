import Box from '@mui/material/Box';
import { CreateCourseExerciseForm } from '../../Components/Forms/Courses/CreateCourseExerciseForm';
import { CourseExercise } from '../../Models/Courses/CourseExercise';
import { FC } from 'react';

type CreateCourseExerciseViewProps = {
  index: number;
  exercise: CourseExercise;
  setExercise: (exercise: CourseExercise) => void;
};

export const CreateCourseExerciseView: FC<CreateCourseExerciseViewProps> = (props) => {
  const { index, exercise, setExercise } = props;

  return (
    <Box sx={{ mt: index === 0 ? 0 : 2 }}>
      <CreateCourseExerciseForm exercise={exercise} setExercise={setExercise} />
    </Box>
  );
};
