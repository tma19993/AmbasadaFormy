import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from '../features/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  private url: string = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  public getTrainers(): Observable<userDataModel[]> {
    return this.http.get<userDataModel[]>(this.url + "/getCoaches");
  }
}
