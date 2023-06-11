import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loginUrl: string = 'http://localhost:5000/login';

  constructor(private http: HttpClient) {}
  private loggedUserId: string;

  public login(login: string, password: string): Observable<any> {
    return this.http.post<LoginModel>(this.loginUrl, {
      login: login,
      password: password,
    });
  }

  public setLoggedUserId(id: string): void {
    this.loggedUserId = id;
  }
  
  public getLoggedUserId(): string {
    return this.loggedUserId;
  }
}
