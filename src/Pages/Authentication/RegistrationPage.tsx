import { MainLayout } from '../../Components/Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { INITIAL_ALERTS, RegisterRequest, useAuthentication } from '../../Providers/AuthenticationProvider';
import { Button } from '@mui/material';
import { AuthenticationView } from '../../Views/Authentication/AuthenticationView';
import { BaseRouterLink } from '../../Components/Links/BaseRouterLink';
import { AppRoutes } from '../../Services/Constants/Routing';
import { RegistrationForm } from '../../Components/Forms/Authentication/RegistrationForm';
import { BaseAlert } from '../../Components/Alerts/BaseAlert';

const RegistrationPage = () => {
  const { alerts, register, setAlerts } = useAuthentication();
  const [request, setRequest] = useState<RegisterRequest>({
    email: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    return () => setAlerts(INITIAL_ALERTS);
  }, []);

  const onRegister = async () => await register(request);

  return (
    <MainLayout>
      <AuthenticationView>
        <BaseAlert testId={'registration-page-user-already-exists-alert'} message={alerts.userAlreadyExists} />
        <RegistrationForm request={request} setRequest={setRequest} />
        <Button
          fullWidth
          id={'registration-page-registration-button'}
          data-testid={'registration-page-registration-button'}
          sx={{ mt: 3 }}
          disabled={request.email === '' || request.password === '' || request.password === ''}
          variant={'outlined'}
          onClick={onRegister}>
          Registration
        </Button>
        <BaseRouterLink id={'registration-page-login-link'} to={AppRoutes.AuthLogin} sx={{ mt: 3 }}>
          Login
        </BaseRouterLink>
      </AuthenticationView>
    </MainLayout>
  );
};

export default RegistrationPage;
