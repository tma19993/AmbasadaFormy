import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private loginUrl: string = 'http://localhost:5000/login';

  constructor(private http: HttpClient, private router: Router) {}
  private loggedUserId: string;

  public login(login: string, password: string): Observable<any> {
    const loginData =  JSON.stringify({
      login: login,
      password: password
    });
    return this.http.post<LoginModel>(this.loginUrl,loginData, this.httpOptions).pipe(tap((res) => this.setToken(res.token)));;
  }

  public setLoggedUserId(id: string): void {
    this.loggedUserId = id;
  }
  
  public getLoggedUserId(): string {
    return this.loggedUserId;
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  public logout(): void {
    localStorage.removeItem('authToken');
    // Opcjonalnie: Wyślij żądanie do backendu, jeśli serwer ma endpoint do wylogowania

    this.router.navigate(['/login']);
  }
  private setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
