import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = 'http://localhost:5000';

  constructor(private http: HttpClient,private login: LoginService) {}

  public getUserData() : Observable<any>{
    return this.http.get<any>(this.url + "/getUser");
  }

  public changeUserData(data: any) : Observable<any>{
    return this.http.post<any>(this.url + "/changeUserData/"+this.login.getLoggedUserId,data);
  }
 
}
