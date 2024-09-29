import { MainLayout } from '../../Components/Layouts/MainLayout';
import CreateCourseView from '../../Views/Courses/CreateCourseView';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCourse } from '../../Redux/Courses/CoursesSlice';
import { INITIAL_COURSES } from '../../Redux/Courses/InitialState';

type Params = {
  courseId: string;
};

const CreateCoursePage = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams<Params>();

  useEffect(() => {
    if (courseId !== 'create') {
      return;
    }

    return () => {
      dispatch(setCourse(INITIAL_COURSES.course));
    };
  }, []);

  return (
    <MainLayout>
      <CreateCourseView courseId={courseId} />
    </MainLayout>
  );
};

export default CreateCoursePage;
