import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, { username, password }).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
