import { LineChart } from '@mui/x-charts';
import { FC } from 'react';

type BaseLineChartProps = {
  testId: string;
};

export const BaseLineChart: FC<BaseLineChartProps> = ({ testId }) => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
      data-testid={`${testId}-line-chart`}
    />
  );
};
