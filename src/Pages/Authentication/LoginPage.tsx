import { MainLayout } from '../../Components/Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { INITIAL_ALERTS, LoginRequest, useAuthentication } from '../../Providers/AuthenticationProvider';
import { LoginForm } from '../../Components/Forms/Authentication/LoginForm';
import { Button } from '@mui/material';
import { AuthenticationView } from '../../Views/Authentication/AuthenticationView';
import { BaseAlert } from '../../Components/Alerts/BaseAlert';
import { BaseRouterLink } from '../../Components/Links/BaseRouterLink';
import { AppRoutes } from '../../Services/Constants/Routing';

const LoginPage = () => {
  const { login, alerts, setAlerts } = useAuthentication();
  const [request, setRequest] = useState<LoginRequest>({
    email: '',
    password: ''
  });

  useEffect(() => {
    return () => setAlerts(INITIAL_ALERTS);
  }, []);

  const onLogin = async () => await login(request);

  return (
    <MainLayout>
      <AuthenticationView>
        <BaseAlert testId={'login-page-wrong-email-or-password-alert'} message={alerts.wrongEmailOrPassword} />
        <LoginForm request={request} setRequest={setRequest} />
        <Button
          fullWidth
          id={'login-page-login-button'}
          data-testid={'login-page-login-button'}
          sx={{ mt: 3 }}
          variant={'outlined'}
          onClick={onLogin}
          disabled={request.email === '' || request.password === ''}>
          Login
        </Button>
        <BaseRouterLink id={'login-page-registration-link'} to={AppRoutes.AuthRegistration} sx={{ mt: 3 }}>
          Registration
        </BaseRouterLink>
      </AuthenticationView>
    </MainLayout>
  );
};

export default LoginPage;
