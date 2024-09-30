import Box from '@mui/material/Box';
import { BaseTextField } from '../../TextFields/BaseTextField';
import { LoginRequest } from '../../../Providers/AuthenticationProvider';
import { FC } from 'react';

type LoginFormProps = {
  request: LoginRequest;
  setRequest: (request: LoginRequest) => void;
};

export const LoginForm: FC<LoginFormProps> = ({ request, setRequest }) => {
  const onEmail = (email: string) => setRequest({ ...request, email });

  const onPassword = (password: string) => setRequest({ ...request, password });

  return (
    <Box>
      <BaseTextField testId={'login-form-email'} label={'Email'} value={request.email} onChange={onEmail} />
      <BaseTextField
        testId={'login-form-password'}
        type={'password'}
        label={'Password'}
        value={request.password}
        onChange={onPassword}
      />
    </Box>
  );
};
