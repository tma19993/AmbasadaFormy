import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel, userDataModel } from 'src/app/shared/models';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loggedUserDataSignal: WritableSignal<userDataModel> = signal<userDataModel>({});
  private httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private loginUrl: string = environment.apiUrl;



  constructor(private http: HttpClient, private router: Router) { }

  public login(login: string, password: string): Observable<LoginModel> {
    const loginData = JSON.stringify({
      login: login,
      password: password,
    });
    return this.http.post<LoginModel>(this.loginUrl + '/login', loginData, this.httpOptions).pipe(tap((res) => {
      this.setToken(res.authToken);
      this.setUserId(res.authToken);
    }));
  }

  public setLoggedUserId(id: string): void {
    sessionStorage.setItem("id", id)
  }

  public isLoggedIn(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token;
  }

  private setUserId(token: string): void {
    if (!token) {
      return;
    }
    else {
      const decode: any = jwtDecode(token);
      this.setLoggedUserId(decode.userId);
    }
  }

  private setToken(token: string): void {
    sessionStorage.setItem('authToken', token);
  }
}
