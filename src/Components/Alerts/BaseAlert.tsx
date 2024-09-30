import { Alert } from '@mui/material';
import { FC } from 'react';

type BaseAlertProps = {
  message: string | null;
  testId: string;
};

export const BaseAlert: FC<BaseAlertProps> = ({ message, testId }) => {
  return message ? (
    <Alert data-testid={testId} sx={{ mt: 2 }} variant="outlined" severity={'error'}>
      {message}
    </Alert>
  ) : null;
};
