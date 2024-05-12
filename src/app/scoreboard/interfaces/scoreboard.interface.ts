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

export interface ScoreServiceParams {
  scoreHome: string | number;
  scoreVisit: string | number;
  foulsHome: string | number;
  foulsVisit: string | number;
  timeoutsHome: string | number;
  timeoutsVisit: string | number;
  period: string | number;
  dateCreation: string | number;
  createdBy: string | number;
}

export interface AddScoreService {
  errors: Array<any>;
  CodeResult: string;
  message: string;
}

export interface ErrorServices {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
