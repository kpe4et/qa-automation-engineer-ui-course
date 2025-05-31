import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  testId: string;
};

export const BaseInfoView: FC<Props> = ({ title, description, testId }) => {
  return (
    <Box>
      <Typography variant="h6" data-test-id={`${testId}-base-view-title`}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }} data-test-id={`${testId}-base-view-description-text`}>
        {description}
      </Typography>
    </Box>
  );
};
