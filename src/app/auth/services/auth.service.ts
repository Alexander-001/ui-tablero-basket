import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../../scoreboard/interfaces/scoreboard.interface';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string = environments.baseURL;
  private user?: User;

  constructor(private http: HttpClient, private router: Router) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(user: User): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${user}`).pipe(
      tap((userService) => (this.user = userService)),
      tap((userService) => {
        if (userService.username !== '') {
          localStorage.setItem('token', 'klasjdlasjlkdsaj');
        }
      })
    );
  }

  addUser(user: User): Observable<UserService> {
    return this.http
      .post<UserService>(`${this.baseUrl}/users/add`, user)
      .pipe(tap((userService) => (this.user = userService.user)));
  }

  checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    else return of(true);
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
