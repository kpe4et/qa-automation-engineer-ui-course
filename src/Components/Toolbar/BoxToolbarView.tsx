import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ToolbarAction } from './BaseToolbarView';
import { FC } from 'react';

type BoxToolbarViewProps = {
  title?: string;
  subtitle?: string;
  actions: ToolbarAction[];
  testId: string;
};

export const BoxToolbarView: FC<BoxToolbarViewProps> = (props) => {
  const { title, subtitle, actions, testId } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {title && (
        <Typography datatest-id={`${testId}-box-toolbar-title-text`} fontWeight={'bold'}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography datatest-id={`${testId}-box-toolbar-subtitle-text`} variant={'body1'}>
          {subtitle}
        </Typography>
      )}
      <Box sx={{ flexGrow: 1 }} />
      {actions.map((action, index) => (
        <IconButton
          key={index}
          data-testid={`${testId}-box-toolbar-${action.testId}-button`}
          sx={{ mr: actions.length === index + 1 ? 0 : 2 }}
          onClick={action.onClick}
          disabled={action.disabled}>
          {action.icon}
        </IconButton>
      ))}
    </Box>
  );
};
