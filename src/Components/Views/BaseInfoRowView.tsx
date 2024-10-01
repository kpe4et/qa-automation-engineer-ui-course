import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { styled, SxProps, Theme } from '@mui/material';

export type BaseInfoRowViewProps = {
  icon?: ReactNode;
  name: string;
  value?: string | number | null;
  containerSx?: SxProps<Theme>;
  testId: string;
};

const Text = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}));

export const BaseInfoRowView: FC<BaseInfoRowViewProps> = (props) => {
  const { icon, name, value = false, containerSx, testId } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...containerSx }}>
      {icon && (
        <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }} data-testid={`${testId}-info-row-view-icon`}>
          {icon}
        </Box>
      )}
      <Text data-testid={`${testId}-info-row-view-text`}>
        {name}: {value || 'unknown'}
      </Text>
    </Box>
  );
};
