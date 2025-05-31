import { Button, TextField } from '@mui/material';
import { BaseCheckbox } from '../../Checkboxes/BaseCheckbox';
import Box from '@mui/material/Box';

export const WelcomeSubscriptionForm = () => {
  return (
    <Box>
      <TextField
        size="small"
        label="Email"
        variant="outlined"
        fullWidth
        data-test-id={'welcome-subscription-form-email-input'}
      />
      <BaseCheckbox label={'I agree to receive updates'} testId={'welcome-subscription-form-receive-updates'} />
      <Button sx={{ mt: 2 }} variant="outlined" fullWidth data-test-id={'welcom-subscription-form-subscribe-button'}>
        Subscribe
      </Button>
    </Box>
  );
};
