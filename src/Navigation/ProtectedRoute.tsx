import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../Services/Constants/Routing';

type ProtectedRouteProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectRoute?: AppRoutes;
  redirectState?: Record<string, string>;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const { children, isAllowed, redirectRoute = AppRoutes.Dashboard, redirectState } = props;

  if (!isAllowed) {
    return <Navigate to={redirectRoute} replace state={redirectState} />;
  }

  return children ? children : <Outlet />;
};
