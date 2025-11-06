export interface SignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}

export interface SignupError {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}
