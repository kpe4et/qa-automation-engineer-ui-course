import { Grid2 } from '@mui/material';
import { BasePaper } from '../../Components/Views/BasePaper';
import { BaseInfoView } from '../../Components/Views/BaseInfoView';
import { WelcomeFeedbackForm } from '../../Components/Forms/Welcome/WelcomeFeedbackForm';

export const WelcomeFeedbackView = () => {
  return (
    <BasePaper sx={{ mt: 3, mb: 7 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <BaseInfoView title={'Feedback'} description={'Let us know what you think about the course'} />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WelcomeFeedbackForm />
        </Grid2>
      </Grid2>
    </BasePaper>
  );
};
