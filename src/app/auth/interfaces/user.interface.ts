export interface User {
  id: string;
  username: string;
  email: string;
}

export interface UserAdd extends User {
  name: string;
}

export interface UserService {
  token: string;
  user: User;
  message: string;
  CodeResult: string;
}
