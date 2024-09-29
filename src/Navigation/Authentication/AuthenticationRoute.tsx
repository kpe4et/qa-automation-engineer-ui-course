import { FC } from 'react';
import { useAuthentication } from '../../Providers/AuthenticationProvider';
import { ProtectedRoute } from '../ProtectedRoute';
import { AppRoutes } from '../../Services/Constants/Routing';

type AuthenticationRouteProps = {
  children?: JSX.Element;
};

export const AuthenticationRoute: FC<AuthenticationRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthentication();

  return (
    <ProtectedRoute isAllowed={isAuthenticated} redirectRoute={AppRoutes.AuthLogin}>
      {children}
    </ProtectedRoute>
  );
};
