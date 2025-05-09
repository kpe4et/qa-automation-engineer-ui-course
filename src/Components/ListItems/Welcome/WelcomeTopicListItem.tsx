import { BaseListItem } from '../BaseListItem';
import CheckIcon from '@mui/icons-material/Check';
import { FC } from 'react';

type Props = {
  title: string;
};

export const WelcomeTopicListItem: FC<Props> = ({ title }) => {
  return <BaseListItem icon={<CheckIcon fontSize={'small'} />} title={title} />;
};
