import * as React from 'react';
import { FC, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { NavigationAppBar } from './NavigationAppBar';
import { NavigationDrawerItems } from './NavigationDrawerItems';
import { useAuthentication } from '../../Providers/AuthenticationProvider';

const DRAWER_WIDTH = 240;

export const NavigationDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated ? (
    <Box sx={{ display: 'flex' }}>
      <NavigationAppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box' }
        }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <NavigationDrawerItems />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  ) : (
    <Box>{children}</Box>
  );
};
