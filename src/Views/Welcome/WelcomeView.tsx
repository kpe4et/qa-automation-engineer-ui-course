import { BasePaper } from '../../Components/Views/BasePaper';
import { Grid2, List, Typography } from '@mui/material';
import { WelcomeTopicListItem } from '../../Components/ListItems/Welcome/WelcomeTopicListItem';

export const WelcomeView = () => {
  return (
    <BasePaper sx={{ mt: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={{ md: 5, xs: 12 }}>
          <Typography variant={'h3'} data-test-id={'welcome-view-main-title'}>
            Welcome to UI Course application!
          </Typography>
        </Grid2>
        <Grid2 size={{ md: 7, xs: 12 }}>
          <Typography variant="h6" data-test-id={'welcome-view-what-you-will-learn-title'}>
            What you&#39;ll learn:
          </Typography>
          <List dense>
            <WelcomeTopicListItem title={'Playwright'} testId={'playwright'} />
            <WelcomeTopicListItem title={'PageObject, PageComponent, PageFactory'} testId={'patterns'} />
            <WelcomeTopicListItem title={'UI Coverage Tool'} testId={'ui-coverage-tool'} />
            <WelcomeTopicListItem title={'CI/CD'} testId={'ci-cd'} />
            <WelcomeTopicListItem title={'Strategy of data-test-id'} testId={'data-test-id'} />
            <WelcomeTopicListItem title={'Allure'} testId={'allure'} />
            <WelcomeTopicListItem title={'And more!'} testId={'and-more'} />
          </List>
        </Grid2>
      </Grid2>
    </BasePaper>
  );
};
