import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

type EmptyViewProps = {
  title: string;
  description: string | ReactNode;
  containerSx?: SxProps<Theme>;
  testId: string;
};

export const EmptyView: FC<EmptyViewProps> = ({ title, description, containerSx, testId }) => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...containerSx
      }}>
      <FolderOpenOutlinedIcon data-testid={`${testId}-empty-view-icon`} fontSize={'large'} />
      <Typography data-testid={`${testId}-empty-view-title-text`} sx={{ mt: 2 }} variant={'h6'}>
        {title}
      </Typography>
      <Typography data-testid={`${testId}-empty-view-description-text`}>{description}</Typography>
    </Box>
  );
};
