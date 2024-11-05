import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { userDataModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private loginUrl: string = 'http://localhost:5000/addUser';

  constructor(private http: HttpClient) {}

  public register(data: userDataModel) : Observable<any>{
    return this.http.post<any>(this.loginUrl, data).pipe(tap((res) => this.setToken(res.authToken)));
  }
  private setToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }
}
