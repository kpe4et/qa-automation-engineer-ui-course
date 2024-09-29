import { BaseModal } from './BaseModal';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

type ConfirmModalProps = {
  modal: boolean;
  setModal: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
};

export const ConfirmModal: FC<ConfirmModalProps> = (props) => {
  const { modal, setModal, title, description, onConfirm } = props;

  return (
    <BaseModal title={title} modal={modal} setModal={setModal} onConfirm={onConfirm}>
      <Typography>{description}</Typography>
    </BaseModal>
  );
};
