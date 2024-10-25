import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GymPassModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GymPassesService {
  private url: string = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  public getGymPasses(): Observable<GymPassModel[]> {
    return this.http.get<GymPassModel[]>(`${this.url}/gym-passes`);
  }
}
