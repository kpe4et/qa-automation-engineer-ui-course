import { BaseListItem } from '../BaseListItem';
import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';

type Props = {
  title: string;
  testId: string;
};

export const WelcomeTopicListItem: FC<Props> = ({ title, testId }) => {
  return (
    <BaseListItem
      icon={<CheckIcon fontSize={'small'} />}
      title={title}
      testId={`${testId}-welcome-topic`} // Формируем контекстный ID
    />
  );
};
