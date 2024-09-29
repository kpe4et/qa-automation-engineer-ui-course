import { INITIAL_USERS, UsersInitialState } from './InitialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { User } from '../../Models/Users/User';
import { v4 as uuidv4 } from 'uuid';

type CreateUser = Pick<User, 'email' | 'username' | 'password'>;

export const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_USERS,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    createUser: (state, action: PayloadAction<CreateUser>) => {
      const user: User = { id: uuidv4(), ...action.payload };
      state.user = user;
      state.users = [...state.users, user];
    },
    clearUsersState: () => INITIAL_USERS
  }
});

const persistConfig: PersistConfig<UsersInitialState> = { key: 'users', storage };

export const { setUser, createUser, clearUsersState } = usersSlice.actions;

export default persistReducer(persistConfig, usersSlice.reducer);
