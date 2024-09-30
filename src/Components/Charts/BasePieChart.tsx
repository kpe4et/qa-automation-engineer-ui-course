import { PieChart } from '@mui/x-charts';
import { FC } from 'react';

type BasePieChartProps = {
  testId: string;
};

export const BasePieChart: FC<BasePieChartProps> = ({ testId }) => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' }
          ]
        }
      ]}
      height={300}
      data-testid={`${testId}-pie-chart`}
    />
  );
};
