import { BaseToolbarView } from '../../Components/Toolbar/BaseToolbarView';
import AddIcon from '@mui/icons-material/Add';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../../Services/Constants/Routing';

export const CoursesListToolbarView = () => {
  const { onNavigate } = useAppNavigationService();

  const onCreateCourse = () => {
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
