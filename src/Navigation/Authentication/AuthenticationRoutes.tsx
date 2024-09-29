import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../PublicRoute';

const LoginPage = lazy(() => import('../../Pages/Authentication/LoginPage'));
const RegistrationPage = lazy(() => import('../../Pages/Authentication/RegistrationPage'));

export const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route index element={null} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/registration'} element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};
