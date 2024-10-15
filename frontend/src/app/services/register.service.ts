import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDataModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private loginUrl: string = 'http://localhost:5000/addUser';

  constructor(private http: HttpClient) {}

  public register(data: userDataModel) : Observable<any>{
    return this.http.post<any>(this.loginUrl, data);
  }
}
