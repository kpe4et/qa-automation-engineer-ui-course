import { BaseSelect } from '../../Selects/BaseSelect';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const WelcomeFeedbackForm = () => {
  const [topic, setTopic] = useState('');

  return (
    <Box>
      <BaseSelect
        value={topic}
        label={'Topic'}
        options={[
          { value: 'content', title: 'Course content', testId: 'content' },
          { value: 'design', title: 'Page design', testId: 'design' },
          { value: 'tooling', title: 'Tooling & stack', testId: 'tooling' }
        ]}
        onSelect={setTopic}
        testId={'welcome-feedback-form-topic'}
      />
      <TextField
        sx={{ mt: 2 }}
        size="small"
        label="Your feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        data-test-id={'welcome-feedback-form-your-feedback-textarea'}
      />
      <Button sx={{ mt: 2 }} variant="contained" fullWidth data-test-id={'welcome-feedback-form-send-feedback-button'}>
        Send Feedback
      </Button>
    </Box>
  );
};
