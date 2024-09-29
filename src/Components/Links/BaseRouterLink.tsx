import { Link as RouterLink } from 'react-router-dom';
import { Link, Theme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { AppRoutes } from '../../Services/Constants/Routing';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';

type BaseRouterLinkProps = {
  to: AppRoutes;
  sx?: SxProps<Theme>;
} & PropsWithChildren;

export const BaseRouterLink: FC<BaseRouterLinkProps> = (props) => {
  const { to, sx, children } = props;

  return (
    <Box sx={sx}>
      <Link to={to} underline="hover" component={RouterLink}>
        {children}
      </Link>
    </Box>
  );
};
