import { Alert } from '@mui/material';
import { FC } from 'react';

type BaseAlertProps = {
  message: string | null;
};

export const BaseAlert: FC<BaseAlertProps> = ({ message }) => {
  return message ? (
    <Alert sx={{ mt: 2 }} variant="outlined" severity={'error'}>
      {message}
    </Alert>
  ) : null;
};
