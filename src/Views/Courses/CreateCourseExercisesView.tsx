import Box from '@mui/material/Box';
import { CourseExercise } from '../../Models/Courses/CourseExercise';
import { FC } from 'react';
import { EmptyView } from '../../Components/Views/EmptyView';
import List from '@mui/material/List';
import AddIcon from '@mui/icons-material/Add';
import { CreateCourseExerciseView } from './CreateCourseExerciseView';
import { BoxToolbarView } from '../../Components/Toolbar/BoxToolbarView';

type CreateCourseExercisesViewProps = {
  exercises: CourseExercise[];
  setExercises: (exercises: CourseExercise[]) => void;
};

export const CreateCourseExercisesView: FC<CreateCourseExercisesViewProps> = ({ exercises, setExercises }) => {
  const setExercise = (newIndex: number) => (newExercise: CourseExercise) => {
    setExercises(exercises.map((exercise, index) => (newIndex === index ? newExercise : exercise)));
  };

  const onCreateExercise = () => {
    setExercises([...exercises, { title: 'Exercise title', description: 'Exercise description' }]);
  };

  const onDeleteExercise = (newIndex: number) => () => {
    setExercises(exercises.filter((_, index) => newIndex !== index));
  };

  return (
    <Box sx={{ mt: 3, mb: 7 }}>
      <BoxToolbarView title={'Exercises'} actions={[{ icon: <AddIcon />, onClick: onCreateExercise }]} />
      {exercises.length === 0 && (
        <EmptyView
          title={'There is no exercises'}
          description={'Click on "Create exercise" button to create new exercise'}
          containerSx={{ mt: 5 }}
        />
      )}
      <List>
        {exercises.map((exercise, index) => (
          <CreateCourseExerciseView
            key={index}
            index={index}
            exercise={exercise}
            setExercise={setExercise(index)}
            onDeleteExercise={onDeleteExercise(index)}
          />
        ))}
      </List>
    </Box>
  );
};
