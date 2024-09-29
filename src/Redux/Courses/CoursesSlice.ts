import { CoursesInitialState, INITIAL_COURSES } from './InitialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Course } from '../../Models/Courses/Course';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: INITIAL_COURSES,
  reducers: {
    setCourse: (state, action: PayloadAction<Course>) => {
      state.course = action.payload;
    },
    createCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [...state.courses, action.payload];
    }
  }
});

const persistConfig: PersistConfig<CoursesInitialState> = { key: 'courses', storage };

export const { setCourse, createCourse } = coursesSlice.actions;

export default persistReducer(persistConfig, coursesSlice.reducer);
