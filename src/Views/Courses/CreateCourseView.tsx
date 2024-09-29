import Box from '@mui/material/Box';
import { CreateCourseToolbarView } from './CreateCourseToolbarView';
import { CreateCourseForm } from '../../Components/Forms/Courses/CreateCourseForm';
import { connect, useDispatch } from 'react-redux';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';
import { FC } from 'react';
import { Course } from '../../Models/Courses/Course';
import { createCourse, setCourse, updateCourse } from '../../Redux/Courses/CoursesSlice';
import { AppRoutes } from '../../Services/Constants/Routing';
import { ReduxState } from '../../Redux/ReduxState';
import { User } from '../../Models/Users/User';
import { CreateCourseExercisesView } from './CreateCourseExercisesView';
import { CourseExercise } from '../../Models/Courses/CourseExercise';

type CreateCourseViewProps = {
  user: User | null;
  course: Course;
  courseId?: string;
};

const CreateCourseView: FC<CreateCourseViewProps> = ({ user, course, courseId }) => {
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();

  const onSetCourse = (course: Course) => dispatch(setCourse(course));

  const onCreateCourse = () => {
    if (user) {
      dispatch(createCourse({ ...course, userId: user.id }));
      onNavigate(AppRoutes.Courses);
    }
  };

  const onEditCourse = () => {
    dispatch(updateCourse(course));
    onNavigate(AppRoutes.Courses);
  };

  const setExercises = (exercises: CourseExercise[]) => onSetCourse({ ...course, exercises });

  return (
    <Box>
      <CreateCourseToolbarView
        title={courseId === 'create' ? 'Create course' : 'Update course'}
        course={course}
        onCreateCourse={courseId === 'create' ? onCreateCourse : onEditCourse}
      />
      <CreateCourseForm course={course} setCourse={onSetCourse} />
      <CreateCourseExercisesView exercises={course.exercises} setExercises={setExercises} />
    </Box>
  );
};

const getState = (state: ReduxState) => ({
  user: state.users.user,
  course: state.courses.course
});
export default connect(getState)(CreateCourseView);
