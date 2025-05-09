import { BasePaper } from '../../Components/Views/BasePaper';
import { Grid2, List, Typography } from '@mui/material';
import { WelcomeTopicListItem } from '../../Components/ListItems/Welcome/WelcomeTopicListItem';

export const WelcomeView = () => {
  return (
    <BasePaper sx={{ mt: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={{ md: 5, xs: 12 }}>
          <Typography variant={'h3'}>Welcome to UI Course application!</Typography>
        </Grid2>
        <Grid2 size={{ md: 7, xs: 12 }}>
          <Typography variant="h6">What you&#39;ll learn:</Typography>
          <List dense>
            <WelcomeTopicListItem title={'Playwright'} />
            <WelcomeTopicListItem title={'PageObject, PageComponent, PageFactory'} />
            <WelcomeTopicListItem title={'UI Coverage Tool'} />
            <WelcomeTopicListItem title={'CI/CD'} />
            <WelcomeTopicListItem title={'Strategy of data-test-id'} />
            <WelcomeTopicListItem title={'Allure'} />
            <WelcomeTopicListItem title={'And more!'} />
          </List>
        </Grid2>
      </Grid2>
    </BasePaper>
  );
};
