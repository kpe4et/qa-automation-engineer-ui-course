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
  testId: string;
};

export const BaseMenu: FC<BaseMenuProps> = (props) => {
  const { children, icon, buttonSx, disabled, menu, setMenu, testId } = props;

  const onOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };

  const onClose = () => setMenu(null);

  return (
    <React.Fragment>
      <IconButton
        data-testid={`${testId}-menu-button`}
        size={'small'}
        onClick={onOpen}
        sx={buttonSx}
        disabled={disabled}>
        {icon}
      </IconButton>
      <Menu
        data-testid={`${testId}-menu`}
        anchorEl={menu}
        open={Boolean(menu)}
        onClose={onClose}
        disableScrollLock={true}>
        {children}
      </Menu>
    </React.Fragment>
  );
};
