import Box from '@mui/material/Box';
import { CreateCourseExerciseForm } from '../../Components/Forms/Courses/CreateCourseExerciseForm';
import { CourseExercise } from '../../Models/Courses/CourseExercise';
import { FC } from 'react';
import { BoxToolbarView } from '../../Components/Toolbar/BoxToolbarView';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type CreateCourseExerciseViewProps = {
  index: number;
  exercise: CourseExercise;
  setExercise: (exercise: CourseExercise) => void;
  onDeleteExercise: () => void;
};

export const CreateCourseExerciseView: FC<CreateCourseExerciseViewProps> = (props) => {
  const { index, exercise, setExercise, onDeleteExercise } = props;
  return (
    <Box sx={{ mt: 2 }}>
      <BoxToolbarView
        subtitle={`#${index + 1} Exercise`}
        actions={[{ icon: <DeleteOutlineOutlinedIcon />, onClick: onDeleteExercise }]}
      />
      <CreateCourseExerciseForm exercise={exercise} setExercise={setExercise} />
    </Box>
  );
};
