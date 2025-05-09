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
          { value: 'content', title: 'Course content' },
          { value: 'design', title: 'Page design' },
          { value: 'tooling', title: 'Tooling & stack' }
        ]}
        onSelect={setTopic}
      />
      <TextField sx={{ mt: 2 }} size="small" label="Your feedback" variant="outlined" fullWidth multiline rows={3} />
      <Button sx={{ mt: 2 }} variant="contained" fullWidth>
        Send Feedback
      </Button>
    </Box>
  );
};
