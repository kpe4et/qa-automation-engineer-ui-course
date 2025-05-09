import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

type Props = {
  label: string;
};

export const BaseCheckbox: FC<Props> = ({ label }) => {
  return <FormControlLabel sx={{ mt: 2 }} label={label} control={<Checkbox defaultChecked />} />;
};
