import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  private url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getTrainers(): Observable<userDataModel[]> {
    return this.http.get<userDataModel[]>(this.url + "/getCoaches");
  }
}
