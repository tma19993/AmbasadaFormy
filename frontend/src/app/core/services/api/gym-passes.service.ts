import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { GymPassModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GymPassesService {
  public gymPassesSignal: WritableSignal<GymPassModel[]> = signal<GymPassModel[]>([]);

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getGymPasses(): void {
    this.http.get<GymPassModel[]>(`${this.url}/getGymPasses`).subscribe(data => this.gymPassesSignal.set(data));
  }
  public addGymPass(newGymPass: GymPassModel): Observable<GymPassModel> {
    const gymPass = JSON.stringify({
      ...newGymPass
    });
    return this.http.post<GymPassModel>(`${this.url}/getGymPasses`, gymPass);
  }

  public updateGymPass(gymPass: GymPassModel): Observable<GymPassModel> {
   return this.http.put<GymPassModel>(`${this.url}/updateGymPass/${gymPass._id}`, gymPass);
  }

  public deleteGymPass(id: string): Observable<GymPassModel> {
    return this.http.delete<GymPassModel>(`${this.url}/deleteGymPass/${id}`);
  }


}
