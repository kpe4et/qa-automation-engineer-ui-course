import { FC } from 'react';
import { RegisterRequest } from '../../../Providers/AuthenticationProvider';
import Box from '@mui/material/Box';
import { BaseTextField } from '../../TextFields/BaseTextField';

type RegistrationFormProps = {
  request: RegisterRequest;
  setRequest: (request: RegisterRequest) => void;
};

export const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const { request, setRequest } = props;

  const onEmail = (email: string) => setRequest({ ...request, email });

  const onUsername = (username: string) => setRequest({ ...request, username });

  const onPassword = (password: string) => setRequest({ ...request, password });

  return (
    <Box>
      <BaseTextField
        testId={'registration-form-email'}
        value={request.email}
        onChange={onEmail}
        label={'Email'}
        minLength={10}
      />
      <BaseTextField
        testId={'registration-form-username'}
        value={request.username}
        onChange={onUsername}
        label={'Username'}
        minLength={6}
      />
      <BaseTextField
        testId={'registration-form-password'}
        type={'password'}
        value={request.password}
        onChange={onPassword}
        label={'Password'}
        minLength={6}
      />
    </Box>
  );
};
