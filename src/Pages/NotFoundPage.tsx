import { MainLayout } from '../Components/Layouts/MainLayout';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { AppRoutes } from '../Services/Constants/Routing';
import { useAppNavigationService } from '../Services/HookServices/AppNavigationServiceHook';

const NotFoundPage = () => {
  const { onNavigate } = useAppNavigationService();

  const onDashboard = () => onNavigate(AppRoutes.Dashboard);

  return (
    <MainLayout>
      <Typography data-testid={'page-not-found-title-text'} sx={{ alignSelf: 'center' }} variant={'h5'}>
        Page not found
      </Typography>
      <Button
        data-testid={'go-to-dashboard-page-button'}
        variant={'outlined'}
        sx={{ mt: 4, alignSelf: 'center' }}
        onClick={onDashboard}>
        Go to dashboard page
      </Button>
    </MainLayout>
  );
};

export default NotFoundPage;
