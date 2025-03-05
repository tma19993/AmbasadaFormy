import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { userDataModel } from 'src/app/shared/models';
import { LoginService } from './login.service';
import { ChevronLeftIcon } from 'primeng/icons/chevronleft';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private LoginService: LoginService = inject(LoginService);
  public userDataSignal: WritableSignal<userDataModel> = signal<userDataModel>({});
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUserData(): void {
    this.http
      .get<userDataModel>(`${this.url}/getUser/${sessionStorage.getItem('id')}`)
      .subscribe((val) => {
        this.userDataSignal.set(val);
      });
  }

  public updateUserData(data: userDataModel): Observable<userDataModel> {
    return this.http.put<userDataModel>(this.url + '/updateUserData/' + sessionStorage.getItem('id'), data);
  }

  public removeUser(): Observable<any> {
    return this.http.delete<any>(this.url + `/deleteUser/${sessionStorage.getItem('id')}`);
  }

  public photoUpdate(event: any): Observable<any> {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('photo', file);
    return this.http.put<any>(this.url + '/uploadPhoto/' + sessionStorage.getItem('id'), formData);
  }

  public get userData(): userDataModel {
    return this.userDataSignal();
  }
}
