import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import {
  ScoreServiceParams,
  AddScoreService,
} from '../interfaces/scoreboard.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScoreService {
  private baseUrl: string = environments.baseURL;
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  });

  //* Score
  addScore(score: ScoreServiceParams): Observable<AddScoreService> {
    return this.http.post<AddScoreService>(`${this.baseUrl}/score/add`, score, {
      headers: this.headers,
    });
  }
}
