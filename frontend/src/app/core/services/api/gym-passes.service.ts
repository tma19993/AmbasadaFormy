import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { GymPassModel } from 'src/app/shared/models';


@Injectable({
  providedIn: 'root'
})
export class GymPassesService {
  private userDataSignal: WritableSignal<GymPassModel[]> = signal<GymPassModel[]>([]);

private url: string = 'http://localhost:5000';

constructor(private http: HttpClient) { }

public getGymPasses(): void {
   this.http.get<GymPassModel[]>(`${this.url}/gym-passes`).subscribe(data => this.userDataSignal.set(data));
}

public get gymPasses(): GymPassModel[] {
    return this.userDataSignal();
}

}
