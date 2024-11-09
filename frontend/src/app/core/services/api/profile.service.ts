import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public userDataSignal: WritableSignal<userDataModel> = signal<userDataModel>({} as userDataModel);
  private url: string = 'http://localhost:5000';
  private userId: string | null = sessionStorage.getItem('id');

  constructor(private http: HttpClient) {}

  public getUserData(): void {
    this.http
      .get<any>(`${this.url}/getUser/${this.userId}`)
      .subscribe((val) => {
        this.userDataSignal.set(val);
      });
  }

  public updateUserData(data: userDataModel): Observable<userDataModel> {
    return this.http.put<userDataModel>(
      this.url + '/updateUserData/' + this.userId,
      data
    );
  }

  public removeUser(): Observable<any> {
    return this.http.delete<any>(this.url + `/deleteUser/${this.userId}`);
  }

  public photoUpdate(event: any): Observable<any> {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('photo', file);
    return this.http.put<any>(this.url + '/uploadPhoto/' + this.userId,formData);
  }

  public get userData(): userDataModel {
    return this.userDataSignal();
  }
}
