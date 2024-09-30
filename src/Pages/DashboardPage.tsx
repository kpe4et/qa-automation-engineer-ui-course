import { MainLayout } from '../Components/Layouts/MainLayout';
import { WidgetView } from '../Components/Views/WidgetView';
import { BaseBarChart } from '../Components/Charts/BaseBarChart';
import { BaseLineChart } from '../Components/Charts/BaseLineChart';
import { Grid2 } from '@mui/material';
import { BasePieChart } from '../Components/Charts/BasePieChart';
import { BaseScatterChart } from '../Components/Charts/BaseScatterChart';
import { BaseToolbarView } from '../Components/Toolbar/BaseToolbarView';

const DashboardPage = () => {
  return (
    <MainLayout>
      <BaseToolbarView testId={'dashboard'} title={'Dashboard'} />
      <Grid2 sx={{ mt: 3 }} container spacing={2}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WidgetView testId={'students'} title={'Students'}>
            <BaseBarChart testId={'students'} />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WidgetView testId={'activities'} title={'Activities'}>
            <BaseLineChart testId={'activities'} />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WidgetView testId={'courses'} title={'Courses'}>
            <BasePieChart testId={'courses'} />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <WidgetView testId={'scores'} title={'Scores'}>
            <BaseScatterChart testId={'scores'} />
          </WidgetView>
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default DashboardPage;
