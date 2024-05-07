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