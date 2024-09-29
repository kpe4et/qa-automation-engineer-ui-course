import { MainLayout } from '../../Components/Layouts/MainLayout';
import CoursesListView from '../../Views/Courses/CoursesListView';
import { CoursesListToolbarView } from '../../Views/Courses/CoursesListToolbarView';

const CoursesListPage = () => {
  return (
    <MainLayout>
      <CoursesListToolbarView />
      <CoursesListView />
    </MainLayout>
  );
};

export default CoursesListPage;
