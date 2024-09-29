import { MainLayout } from '../Components/Layouts/MainLayout';
import { WidgetView } from '../Components/Views/WidgetView';
import { BaseBarChart } from '../Components/Charts/BaseBarChart';
import { BaseLineChart } from '../Components/Charts/BaseLineChart';
import { Grid2 } from '@mui/material';
import { BasePieChart } from '../Components/Charts/BasePieChart';
import { BaseScatterChart } from '../Components/Charts/BaseScatterChart';

const HomePage = () => {
  return (
    <MainLayout>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6 }}>
          <WidgetView title={'Students'}>
            <BaseBarChart />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <WidgetView title={'Activities'}>
            <BaseLineChart />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <WidgetView title={'Courses'}>
            <BasePieChart />
          </WidgetView>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <WidgetView title={'Scores'}>
            <BaseScatterChart />
          </WidgetView>
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default HomePage;
