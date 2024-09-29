import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ToolbarAction } from './BaseToolbarView';
import { FC } from 'react';

type BoxToolbarViewProps = {
  title: string;
  actions: ToolbarAction[];
};

export const BoxToolbarView: FC<BoxToolbarViewProps> = ({ title, actions }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography fontWeight={'bold'}>{title}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      {actions.map((action, index) => (
        <IconButton
          key={index}
          sx={{ mr: actions.length === index + 1 ? 0 : 2 }}
          onClick={action.onClick}
          disabled={action.disabled}>
          {action.icon}
        </IconButton>
      ))}
    </Box>
  );
};
