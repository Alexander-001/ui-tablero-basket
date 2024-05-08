export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  email: string;
  username: string;
  password: string;
}

export interface UserService {
  token: string;
  user: User;
  message: string;
  CodeResult: string;
}

export interface Score {
  home: number;
  visit: number;
  disabledClick: boolean;
}

export interface Fouls {
  foulsHome: number;
  foulsVisit: number;
}

export interface Timeouts {
  timeoutsHome: number;
  timeoutsVisit: number;
}
