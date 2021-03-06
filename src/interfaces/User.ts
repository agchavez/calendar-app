export interface UserResponse {
  user: IUser;
  access_token: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  isActive?: boolean;
}
