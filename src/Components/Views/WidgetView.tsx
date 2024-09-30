import { BasePaper } from './BasePaper';
import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import { Grid2, SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';

type WidgetViewProps = {
  sx?: SxProps<Theme>;
  menu?: ReactNode;
  title?: string | ReactNode;
  label?: ReactNode;
  children?: ReactNode;
  childrenSx?: SxProps<Theme>;
  testId: string;
};

export const WidgetView: FC<WidgetViewProps> = (props) => {
  const { sx, menu, title, label, children, childrenSx, testId } = props;

  return (
    <BasePaper sx={sx}>
      <Grid2 container spacing={1} display={'flex'} alignItems={'center'}>
        <Grid2>
          <Typography data-testid={`${testId}-widget-title-text`} variant={'h6'}>
            {title}
          </Typography>
        </Grid2>
        <Grid2>{label}</Grid2>
        <Box sx={{ flexGrow: 1 }} />
        <Grid2>{menu}</Grid2>
      </Grid2>
      <Box sx={childrenSx}>{children}</Box>
    </BasePaper>
  );
};
