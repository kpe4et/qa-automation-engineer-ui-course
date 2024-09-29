import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../PublicRoute';

const CoursesListPage = lazy(() => import('../../Pages/Courses/CoursesListPage'));
const CreateCoursePage = lazy(() => import('../../Pages/Courses/CreateCoursePage'));

export const CoursesRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route index element={<CoursesListPage />} />
        <Route path={'/:courseId'} element={<CreateCoursePage />} />
      </Route>
    </Routes>
  );
};
