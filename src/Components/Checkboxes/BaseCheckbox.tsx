import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

type Props = {
  label: string;
  testId: string;
};

export const BaseCheckbox: FC<Props> = ({ label, testId }) => {
  return (
    <FormControlLabel
      sx={{ mt: 2 }}
      label={label}
      control={<Checkbox defaultChecked />}
      data-tes-id={`${testId}-checkbox-label`}
    />
  );
};
