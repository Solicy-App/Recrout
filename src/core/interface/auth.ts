interface IAuth {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  terms: boolean;
  confirmPassword: string;
  remember_me: boolean;
}

export type SignInType = Pick<IAuth, 'email' | 'password'>;
export type SignUpType = IAuth;
