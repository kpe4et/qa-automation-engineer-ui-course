import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC } from 'react';

export type DrawerListItemProps = {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected?: boolean;
  testId: string;
};

export const DrawerListItem: FC<DrawerListItemProps> = (props) => {
  const { icon, title, onClick, selected, testId } = props;

  return (
    <ListItem disableGutters>
      <ListItemButton onClick={onClick} selected={selected} data-testid={`${testId}-drawer-list-item-button`}>
        <ListItemIcon data-testid={`${testId}-drawer-list-item-icon`}>{icon}</ListItemIcon>
        <ListItemText data-testid={`${testId}-drawer-list-item-title-text`} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
