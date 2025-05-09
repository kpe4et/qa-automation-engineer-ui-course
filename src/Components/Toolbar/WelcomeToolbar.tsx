import { BaseToolbarView } from './BaseToolbarView';
import GitHubIcon from '@mui/icons-material/GitHub';

export const WelcomeToolbar = () => {
  const onGitHub = () => window.open('https://github.com/Nikita-Filonov/qa-automation-engineer-ui-course');

  return (
    <BaseToolbarView
      title={'Welcome!'}
      testId={'welcome'}
      actions={[{ icon: <GitHubIcon />, testId: 'github', onClick: onGitHub }]}
      containerSx={{ mt: 3 }}
    />
  );
};
