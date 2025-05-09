import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './Navigation/PublicRoute';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './Services/Constants/Routing';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { SuspenseBackdropView } from './Components/Views/SuspenseBackdropView';
import { NavigationDrawer } from './Components/Navigation/NavigationDrawer';
import { createRoot } from 'react-dom/client';
import { AuthenticationRoutes } from './Navigation/Authentication/AuthenticationRoutes';
import { AuthenticationRoute } from './Navigation/Authentication/AuthenticationRoute';
import { AuthenticationProvider } from './Providers/AuthenticationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CoursesRoutes } from './Navigation/Courses/CoursesRoutes';
import { WelcomePage } from './Pages/WelcomePage';

const DashboardPage = lazy(() => import('./Pages/DashboardPage'));
const NotFoundPagePage = lazy(() => import('./Pages/NotFoundPage'));

const IndexRoute = () => {
  return (
    <Suspense fallback={<SuspenseBackdropView />}>
      <NavigationDrawer>
        <Routes>
          <Route element={<AuthenticationRoute />}>
            <Route path={`${AppRoutes.Courses}/*`} element={<CoursesRoutes />} />
            <Route path={`${AppRoutes.Dashboard}/*`} element={<DashboardPage />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path={`${AppRoutes.Auth}/*`} element={<AuthenticationRoutes />} />
            <Route path={`${AppRoutes.Welcome}/*`} element={<WelcomePage />} />
          </Route>

          <Route path={AppRoutes.NotFound} element={<NotFoundPagePage />} />
        </Routes>
      </NavigationDrawer>
    </Suspense>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <AuthenticationProvider>
            <IndexRoute />
          </AuthenticationProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
