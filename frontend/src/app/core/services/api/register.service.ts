import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginModel, userDataModel } from 'src/app/shared/models';
import { LoginService } from './login.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private loginService: LoginService = inject(LoginService);
  private loginUrl: string = 'http://localhost:5000/addUser';

  constructor(private http: HttpClient) { }

  public register(data: userDataModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.loginUrl, data).pipe(tap((res) => {
      this.setToken(res.authToken);
      this.setUserId(res.authToken)
    }));
  }
  private setToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  private setUserId(token: string): void {
    if (!token) {
      return;
    }
    else {
      const decode: any = jwtDecode(token);
      this.loginService.setLoggedUserId(decode.userId);
    }
  }
}
