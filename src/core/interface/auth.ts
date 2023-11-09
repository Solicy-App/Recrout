interface AuthI {
    first_name: string; 
    last_name: string; 
    email: string;
    password1: string;
    terms: boolean;
    confirmPassword?: string;
    remember_me: boolean;
}

export type SignInType = Pick<AuthI,'email' | 'password1'>
export type SignUpType = AuthI
