import { User } from '../../Models/Users/User';

export type UsersInitialState = {
  user: User | null;
  users: User[];
};

export const INITIAL_USERS: UsersInitialState = {
  user: null,
  users: []
};
