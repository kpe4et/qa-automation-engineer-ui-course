import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FC, ReactNode, useMemo } from 'react';
import Box from '@mui/material/Box';
import { styled, SxProps, Theme } from '@mui/material';

export type BaseInfoRowViewProps = {
  name: string;
  value?: string | number | null;
  component?: ReactNode;
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
  const { name, value, component = false, containerSx, testId } = props;

  const internalValue = useMemo(() => value || 'unknown', [value]);

  const onCopy = async () => {
    await navigator.clipboard.writeText(String(value));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...containerSx }}>
      <Text data-testid={`${testId}-info-row-view-text`}>
        {name}: {component ? component : internalValue}
      </Text>
      {Boolean(value) && (
        <Box sx={{ display: 'flex' }}>
          <IconButton
            data-testid={`${testId}-info-row-view-copy-button`}
            size={'small'}
            sx={{ ml: 2 }}
            onClick={onCopy}>
            <ContentCopyIcon fontSize={'small'} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
