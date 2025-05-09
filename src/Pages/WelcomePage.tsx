import { MainLayout } from '../Components/Layouts/MainLayout';
import { WelcomeView } from '../Views/Welcome/WelcomeView';
import { WelcomeSubscriptionView } from '../Views/Welcome/WelcomeSubscriptionView';
import { WelcomeToolbar } from '../Components/Toolbar/WelcomeToolbar';
import { WelcomeFeedbackView } from '../Views/Welcome/WelcomeFeedbackView';

export const WelcomePage = () => {
  return (
    <MainLayout>
      <WelcomeToolbar />
      <WelcomeView />
      <WelcomeSubscriptionView />
      <WelcomeFeedbackView />
    </MainLayout>
  );
};
