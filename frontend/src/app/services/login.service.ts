import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel, userDataModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private loginUrl: string = 'http://localhost:5000/login';

  constructor(private http: HttpClient, private router: Router) {}

  public login(login: string, password: string): Observable<LoginModel> {
    const loginData =  JSON.stringify({
      login: login,
      password: password
    });
    return this.http.post<LoginModel>(this.loginUrl,loginData, this.httpOptions).pipe(tap((res) => this.setToken(res.authToken)));
  }

  public setLoggedUserId(id: string): void {
    sessionStorage.setItem("id", id)
  }
  
  public isLoggedIn(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token;
  }
  
  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }

  private setToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }
}
