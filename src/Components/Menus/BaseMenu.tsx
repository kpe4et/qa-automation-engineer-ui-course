import { IconButton, SxProps, Theme } from '@mui/material';
import Menu from '@mui/material/Menu';
import React, { FC } from 'react';

type BaseMenuProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  buttonSx?: SxProps<Theme>;
  menu: null | HTMLElement;
  setMenu: (menu: null | HTMLElement) => void;
};

export const BaseMenu: FC<BaseMenuProps> = (props) => {
  const { children, icon, buttonSx, disabled, menu, setMenu } = props;

  const onOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };

  const onClose = () => setMenu(null);

  return (
    <React.Fragment>
      <IconButton size={'small'} onClick={onOpen} sx={buttonSx} disabled={disabled}>
        {icon}
      </IconButton>
      <Menu anchorEl={menu} open={Boolean(menu)} onClose={onClose} disableScrollLock={true}>
        {children}
      </Menu>
    </React.Fragment>
  );
};
