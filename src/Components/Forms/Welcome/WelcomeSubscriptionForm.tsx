import { Button, TextField } from '@mui/material';
import { BaseCheckbox } from '../../Checkboxes/BaseCheckbox';
import Box from '@mui/material/Box';

export const WelcomeSubscriptionForm = () => {
  return (
    <Box>
      <TextField size="small" label="Email" variant="outlined" fullWidth />
      <BaseCheckbox label={'I agree to receive updates'} />
      <Button sx={{ mt: 2 }} variant="outlined" fullWidth>
        Subscribe
      </Button>
    </Box>
  );
};
