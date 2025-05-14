export interface LoginCreds {
  validUser: User;
  invalidUser: User;
  adminCreds: User;
  skipSpecFiles: string[]; // array of spec file names for which the support login should be skipped
  adminSpecFiles: string[]; // array of spec file names for which the admin login should be performed
}

export interface User {
  email: string;
  password: string;
}
