import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, setUser } from '../Redux/Users/UsersSlice';
import { ReduxState } from '../Redux/ReduxState';
import { User } from '../Models/Users/User';
import { useAppNavigationService } from '../Services/HookServices/AppNavigationServiceHook';
import { AppRoutes } from '../Services/Constants/Routing';

export interface AuthenticationAlerts {
  wrongEmailOrPassword: string | null;
  emailRequired: string | null;
  usernameRequired: string | null;
  passwordRequired: string | null;
  userAlreadyExists: string | null;
}

export interface LoginRequest extends Pick<User, 'email' | 'password'> {}

export interface RegisterRequest extends Pick<User, 'email' | 'username' | 'password'> {}

export const INITIAL_ALERTS: AuthenticationAlerts = {
  wrongEmailOrPassword: null,
  emailRequired: null,
  usernameRequired: null,
  passwordRequired: null,
  userAlreadyExists: null
};

export type AuthenticationContextProps = {
  login: (request: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  register: (request: RegisterRequest) => Promise<void>;
  alerts: AuthenticationAlerts;
  setAlerts: (alerts: AuthenticationAlerts) => void;
  isAuthenticated: boolean;
};

const AuthenticationContext = React.createContext<AuthenticationContextProps | null>(null);

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();
  const [alerts, setAlerts] = useState<AuthenticationAlerts>(INITIAL_ALERTS);

  const users = useSelector((state: ReduxState) => state.users.users);
  const isAuthenticated = useSelector((state: ReduxState) => state.users.user !== null);

  const login = async ({ email, password }: LoginRequest) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch(setUser(user));
      onNavigate(AppRoutes.Dashboard);
    } else {
      setAlerts({ ...alerts, wrongEmailOrPassword: 'Wrong email or password' });
    }
  };

  const logout = async () => {
    dispatch(setUser(null));
    onNavigate(AppRoutes.AuthLogin);
  };

  const register = async ({ email, username, password }: RegisterRequest) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setAlerts({ ...alerts, userAlreadyExists: 'User already exists' });
    } else {
      dispatch(createUser({ email, username, password }));
      onNavigate(AppRoutes.Dashboard);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ login, logout, register, alerts, setAlerts, isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => {
  const event = useContext(AuthenticationContext);
  if (event == null) {
    throw new Error('useAuthentication() called outside of a AuthenticationProvider?');
  }
  return event;
};

export { AuthenticationProvider, useAuthentication };
