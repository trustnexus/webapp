export interface Banner {
  id: string;
  category: string;
  heading: string;
  description: string;
  route: string;
  media_url: string;
  media_type:string
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

export interface ServiceForm {
  id:string;
 title:string
 description:string
 route:string
}