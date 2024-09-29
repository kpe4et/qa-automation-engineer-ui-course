import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { User } from '../../Models/Users/User';
import { connect } from 'react-redux';
import { ReduxState } from '../../Redux/ReduxState';
import { FC } from 'react';

type NavigationAppBarProps = {
  user: User | null;
};

const NavigationAppBar: FC<NavigationAppBarProps> = ({ user }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          UI Course
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography>Welcome, {user?.username}!</Typography>
      </Toolbar>
    </AppBar>
  );
};

const getState = (state: ReduxState) => ({ user: state.users.user });
export default connect(getState)(NavigationAppBar);
