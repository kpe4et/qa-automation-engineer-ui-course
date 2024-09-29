export enum AppRoutes {
  NotFound = '*',

  Home = '/home',

  Auth = '/auth',
  AuthLogin = '/auth/login',
  AuthRegistration = '/auth/registration',

  Courses = '/courses',
  CreateCourse = '/courses/:courseId'
}
