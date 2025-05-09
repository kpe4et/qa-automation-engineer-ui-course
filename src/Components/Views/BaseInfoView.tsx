import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  description: string;
};

export const BaseInfoView: FC<Props> = ({ title, description }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  );
};
