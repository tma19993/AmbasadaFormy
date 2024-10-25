import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userDataModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public userData$: Observable<userDataModel>;

  private userDataSubject = new BehaviorSubject<userDataModel>({});
  private url: string = 'http://localhost:5000';
  private userId: string | null = sessionStorage.getItem("id");

  constructor(private http: HttpClient) {
    this.userData$ = this.userDataSubject.asObservable()
  }

  public getUserData(): Observable<userDataModel> {
    return this.http.get<any>(`${this.url}/getUser/${this.userId}`);
  }

  public changeUserData(data: any): Observable<any> {
    return this.http.post<any>(this.url + "/changeUserData/" + this.userId, data);
  }

  public removeUser(): Observable<any> {
    console.log(this.url + `/deleteUser/${this.userId}`);
    return this.http.delete<any>(this.url + `/deleteUser/${this.userId}`);
  }

  public photoUpdate(event: any): Observable<any> {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('photo', file);
    return this.http.put<any>(this.url + "/uploadPhoto/" + this.userId, formData)
  }

  public setUserData(userData: userDataModel): void {
    this.userDataSubject.next(userData);
  }
}
