import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestModel } from 'src/app/shared/models';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequestsGymPassesService {
  public requestsSignal: WritableSignal<RequestModel[]> = signal<RequestModel[]>([] as RequestModel[])
  private url: string = 'http://localhost:5000/AmbasadaFormy';
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  public getRequests(): void {
    this.http.get<RequestModel[]>(this.url + "/getRequests").subscribe(val => {
      this.requestsSignal.set(val);
    });
  }

  public addRequest(request: RequestModel): Observable<RequestModel> {
    return this.http.post<RequestModel>(this.url + "/addRequest", request);

  }

}
