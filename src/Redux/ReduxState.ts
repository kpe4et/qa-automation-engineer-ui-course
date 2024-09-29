import { UsersInitialState } from './Users/InitialState';
import { CoursesInitialState } from './Courses/InitialState';

export interface ReduxState {
  users: UsersInitialState;
  courses: CoursesInitialState;
}
