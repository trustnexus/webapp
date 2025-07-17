export interface Banner {
  id: string;
  category: string;
  heading: string;
  description: string;
  route: string;
  media: string;
}

export interface LoginForm  {
  email: string;
  password: string;
};
export interface SignupForm  {
  name: string;
  email: string;
  password: string;
  role?: string;
};
