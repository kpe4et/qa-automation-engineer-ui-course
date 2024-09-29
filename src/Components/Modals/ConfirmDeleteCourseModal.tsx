import { ConfirmModal } from './ConfirmModal';
import { FC } from 'react';

type ConfirmDeleteCourseModalProps = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  onConfirm: () => void;
};

export const ConfirmDeleteCourseModal: FC<ConfirmDeleteCourseModalProps> = (props) => {
  const { modal, setModal, onConfirm } = props;

  const onInternalConfirm = () => {
    onConfirm();
    setModal(false);
  };

  return (
    <ConfirmModal
      modal={modal}
      setModal={setModal}
      title={'Confirm deleting course'}
      description={'Are you sure you want to delete the course? This action cannot be undone'}
      onConfirm={onInternalConfirm}
    />
  );
};
