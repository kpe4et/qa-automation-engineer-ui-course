import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Users/UsersSlice';
import coursesReducer from './Courses/CoursesSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer
  }
});
export const persistor = persistStore(store);
