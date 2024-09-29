export enum AppRoutes {
  NotFound = '*',

  Dashboard = '/dashboard',

  Auth = '/auth',
  AuthLogin = '/auth/login',
  AuthRegistration = '/auth/registration',

  Courses = '/courses',
  CreateCourse = '/courses/:courseId'
}
