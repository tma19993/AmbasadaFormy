import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { GymPassModel } from 'src/app/shared/models';


@Injectable({
  providedIn: 'root'
})
export class GymPassesService {
  public gymPassesSignal: WritableSignal<GymPassModel[]> = signal<GymPassModel[]>([]);

  private url: string = ' environment.apiUrl';

  constructor(private http: HttpClient) { }

  public getGymPasses(): void {
    this.http.get<GymPassModel[]>(`${this.url}/gym-passes`).subscribe(data => this.gymPassesSignal.set(data));
  }


}
