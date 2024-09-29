import Box from '@mui/material/Box';
import { CreateCourseToolbarView } from './CreateCourseToolbarView';
import { CreateCourseForm } from '../../Components/Forms/Courses/CreateCourseForm';
import { connect, useDispatch } from 'react-redux';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';
import { FC, useState } from 'react';
import { Course } from '../../Models/Courses/Course';
import { INITIAL_COURSES } from '../../Redux/Courses/InitialState';
import { createCourse } from '../../Redux/Courses/CoursesSlice';
import { AppRoutes } from '../../Services/Constants/Routing';
import { ReduxState } from '../../Redux/ReduxState';
import { User } from '../../Models/Users/User';
import { CreateCourseExercisesView } from './CreateCourseExercisesView';
import { CourseExercise } from '../../Models/Courses/CourseExercise';

type CreateCourseViewProps = {
  user: User | null;
};

const CreateCourseView: FC<CreateCourseViewProps> = ({ user }) => {
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();
  const [course, setCourse] = useState<Course>(INITIAL_COURSES.course);

  const onCreateCourse = () => {
    if (user) {
      dispatch(createCourse({ ...course, userId: user.id }));
      onNavigate(AppRoutes.Courses);
    }
  };

  const setExercises = (exercises: CourseExercise[]) => setCourse({ ...course, exercises });

  return (
    <Box>
      <CreateCourseToolbarView course={course} onCreateCourse={onCreateCourse} />
      <CreateCourseForm course={course} setCourse={setCourse} />
      <CreateCourseExercisesView exercises={course.exercises} setExercises={setExercises} />
    </Box>
  );
};

const getState = (state: ReduxState) => ({ user: state.users.user });
export default connect(getState)(CreateCourseView);
