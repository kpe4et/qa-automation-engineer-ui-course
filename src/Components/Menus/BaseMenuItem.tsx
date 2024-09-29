import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React, { FC } from 'react';

type BaseMenuItemProps = {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export const BaseMenuItem: FC<BaseMenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{label}</ListItemText>
    </MenuItem>
  );
};
