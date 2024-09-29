import List from '@mui/material/List';
import * as React from 'react';
import { DrawerListItem } from '../ListItems/DrawerListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthentication } from '../../Providers/AuthenticationProvider';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../Services/Constants/Routing';
import { useAppNavigationService } from '../../Services/HookServices/AppNavigationServiceHook';

export const NavigationDrawerItems = () => {
  const { pathname } = useLocation();
  const { logout } = useAuthentication();
  const { onNavigate } = useAppNavigationService();

  const onNavigateTo = (route: AppRoutes) => () => onNavigate(route);

  return (
    <List>
      <DrawerListItem
        icon={<HomeOutlinedIcon />}
        title={'Dashboard'}
        selected={pathname.startsWith(AppRoutes.Dashboard)}
        onClick={onNavigateTo(AppRoutes.Dashboard)}
      />
      <DrawerListItem
        icon={<ArticleOutlinedIcon />}
        title={'Courses'}
        selected={pathname.startsWith(AppRoutes.Courses)}
        onClick={onNavigateTo(AppRoutes.Courses)}
      />
      <DrawerListItem icon={<LogoutIcon />} title={'Logout'} onClick={logout} />
    </List>
  );
};
