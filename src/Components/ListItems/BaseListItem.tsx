import { ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC, ReactNode } from 'react';

type BaseListItemProps = {
  menu?: ReactNode;
  icon?: ReactNode;
  dense?: boolean;
  title?: ReactNode;
  label?: ReactNode;
  avatar?: ReactNode;
  disabled?: boolean;
  subtitle?: string;
  selected?: boolean;
  onClick?: () => void;
  testId?: string;
};

export const BaseListItem: FC<BaseListItemProps> = (props) => {
  const { testId, icon, avatar, title, subtitle, label, ...rest } = props;

  return (
    <ListItem dense={rest.dense} secondaryAction={rest.menu} divider disableGutters sx={{ pr: 0 }}>
      <ListItemButton
        selected={rest.selected}
        disabled={rest.disabled}
        onClick={rest.onClick}
        data-test-id={`${testId}-list-item-button`} // типа коммент чтобы не
      >
        {icon && <ListItemIcon data-test-id={`${testId}-list-item-icon`}>{icon}</ListItemIcon>}
        {avatar && <ListItemAvatar data-test-id={`${testId}-list-item-avatar-icon`}>{avatar}</ListItemAvatar>}
        <ListItemText data-test-id={`${testId}-list-item-text`} primary={title} secondary={subtitle} />
        {label}
      </ListItemButton>
    </ListItem>
  );
};
