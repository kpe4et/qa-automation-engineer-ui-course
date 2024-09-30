import { BarChart } from '@mui/x-charts/BarChart';
import { FC } from 'react';

type BaseBarChartProps = {
  testId: string;
};

export const BaseBarChart: FC<BaseBarChartProps> = ({ testId }) => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
      data-testid={`${testId}-bar-chart`}
    />
  );
};
