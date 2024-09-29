import { CoursesInitialState, INITIAL_COURSES } from './InitialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Course } from '../../Models/Courses/Course';
import { v4 as uuidv4 } from 'uuid';

type CreateCourse = Omit<Course, 'id'>;

type DeleteCourse = {
  courseId: string;
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: INITIAL_COURSES,
  reducers: {
    setCourse: (state, action: PayloadAction<Course>) => {
      state.course = action.payload;
    },
    createCourse: (state, action: PayloadAction<CreateCourse>) => {
      const course: Course = { ...action.payload, id: uuidv4() };
      state.courses = [...state.courses, course];
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((course) => (course.id === action.payload.id ? action.payload : course));
    },
    deleteCourse: (state, action: PayloadAction<DeleteCourse>) => {
      state.courses = state.courses.filter((course) => course.id !== action.payload.courseId);
    }
  }
});

const persistConfig: PersistConfig<CoursesInitialState> = { key: 'courses', storage };

export const { setCourse, createCourse, updateCourse, deleteCourse } = coursesSlice.actions;

export default persistReducer(persistConfig, coursesSlice.reducer);
