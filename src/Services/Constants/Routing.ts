export enum AppRoutes {
  NotFound = '*',

  Welcome = '/welcome',

  Dashboard = '/dashboard',

  Auth = '/auth',
  AuthLogin = '/auth/login',
  AuthRegistration = '/auth/registration',

  Courses = '/courses',
  CreateCourse = '/courses/:courseId'
}
