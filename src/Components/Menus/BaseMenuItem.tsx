import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React, { FC } from 'react';

type BaseMenuItemProps = {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  testId: string;
};

export const BaseMenuItem: FC<BaseMenuItemProps> = ({ icon, label, onClick, testId }) => {
  return (
    <MenuItem data-testid={`${testId}-menu-item`} onClick={onClick}>
      {icon && <ListItemIcon data-testid={`${testId}-menu-item-icon`}>{icon}</ListItemIcon>}
      <ListItemText data-testid={`${testId}-menu-item-text`}>{label}</ListItemText>
    </MenuItem>
  );
};
