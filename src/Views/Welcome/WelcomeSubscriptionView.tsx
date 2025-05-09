import { Grid2 } from '@mui/material';
import { BasePaper } from '../../Components/Views/BasePaper';
import { BaseInfoView } from '../../Components/Views/BaseInfoView';
import { WelcomeSubscriptionForm } from '../../Components/Forms/Welcome/WelcomeSubscriptionForm';

export const WelcomeSubscriptionView = () => {
  return (
    <BasePaper sx={{ mt: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <BaseInfoView
            title={'Subscribe to news!'}
            description={'Get updates about new topics and workshops directly to your inbox.'}
          />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WelcomeSubscriptionForm />
        </Grid2>
      </Grid2>
    </BasePaper>
  );
};
