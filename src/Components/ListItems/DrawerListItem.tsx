import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC } from 'react';

export type DrawerListItemProps = {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected?: boolean;
};

export const DrawerListItem: FC<DrawerListItemProps> = (props) => {
  const { icon, title, onClick, selected } = props;

  return (
    <ListItem disableGutters>
      <ListItemButton onClick={onClick} selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
