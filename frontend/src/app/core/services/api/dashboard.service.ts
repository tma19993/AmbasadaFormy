import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DashboardModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http: HttpClient = inject(HttpClient);
  public dashboardSignal: WritableSignal<DashboardModel> = signal<DashboardModel>({} as DashboardModel);
  private url: string = 'http://localhost:5000/AmbasadaFormy';

  public getDashboardData(): void {
    this.http.get<DashboardModel>(this.url + "/dashboard").subscribe(val => {
      this.dashboardSignal.set(val);
    })
  }
}
