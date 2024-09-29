import { MainLayout } from '../../Components/Layouts/MainLayout';
import CreateCourseView from '../../Views/Courses/CreateCourseView';
import { useParams } from 'react-router-dom';

type Params = {
  courseId: string;
};

const CreateCoursePage = () => {
  const { courseId } = useParams<Params>();

  return (
    <MainLayout>
      <CreateCourseView courseId={courseId} />
    </MainLayout>
  );
};

export default CreateCoursePage;
