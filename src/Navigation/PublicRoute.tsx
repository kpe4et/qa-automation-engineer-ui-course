import { FC } from 'react';
import { ProtectedRoute } from './ProtectedRoute';

type PublicRouteProps = {
  children?: JSX.Element;
};

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  return <ProtectedRoute isAllowed={true}>{children}</ProtectedRoute>;
};
