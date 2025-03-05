import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestModel } from 'src/app/shared/models';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsGymPassesService {
  public requestsSignal: WritableSignal<RequestModel[]> = signal<RequestModel[]>([] as RequestModel[])
  private url: string = environment.apiUrl;
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
