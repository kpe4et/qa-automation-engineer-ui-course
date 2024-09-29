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

const CoursesContext = React.createContext<AuthenticationContextProps | null>(null);

const CoursesProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { onNavigate } = useAppNavigationService();
  const [alerts, setAlerts] = useState<AuthenticationAlerts>(INITIAL_ALERTS);

  const users = useSelector((state: ReduxState) => state.users.users);
  const isAuthenticated = useSelector((state: ReduxState) => state.users.user !== null);

  const validateEmail = (email: string) => {
    if (email === '') {
      setAlerts({ ...alerts, emailRequired: 'Email is required' });
      return false;
    }

    return true;
  };

  const validateUsername = (username: string) => {
    if (username === '') {
      setAlerts({ ...alerts, usernameRequired: 'Username is required' });
      return false;
    }

    return true;
  };

  const validatePassword = (password: string) => {
    if (password === '') {
      setAlerts({ ...alerts, passwordRequired: 'Password is required' });
      return false;
    }

    return true;
  };

  const login = async ({ email, password }: LoginRequest) => {
    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch(setUser(user));
      onNavigate(AppRoutes.Home);
    } else {
      setAlerts({ ...alerts, wrongEmailOrPassword: 'Wrong email or password' });
    }
  };

  const logout = async () => {
    dispatch(setUser(null));
    onNavigate(AppRoutes.AuthLogin);
  };

  const register = async ({ email, username, password }: RegisterRequest) => {
    if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password)) {
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setAlerts({ ...alerts, userAlreadyExists: 'User already exists' });
    } else {
      dispatch(createUser({ email, username, password }));
      onNavigate(AppRoutes.Home);
    }
  };

  return (
    <CoursesContext.Provider value={{ login, logout, register, alerts, setAlerts, isAuthenticated }}>
      {children}
    </CoursesContext.Provider>
  );
};

const useCourses = () => {
  const event = useContext(CoursesContext);
  if (event == null) {
    throw new Error('useCourses() called outside of a CoursesProvider?');
  }
  return event;
};

export { CoursesProvider, useCourses };
