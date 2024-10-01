import { BaseToolbarView } from '../../Components/Toolbar/BaseToolbarView';
import AddIcon from '@mui/icons-material/Add';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../../Services/Constants/Routing';
import { useDispatch } from 'react-redux';
import { setCourse } from '../../Redux/Courses/CoursesSlice';
import { INITIAL_COURSES } from '../../Redux/Courses/InitialState';

export const CoursesListToolbarView = () => {
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();

  const onCreateCourse = () => {
    dispatch(setCourse(INITIAL_COURSES.course));
    onNavigate(AppRoutes.CreateCourse, { courseId: 'create' });
  };

  return (
    <BaseToolbarView
      testId={'courses-list'}
      title={'Courses'}
      actions={[{ testId: 'create-course', icon: <AddIcon />, onClick: onCreateCourse }]}
    />
  );
};
