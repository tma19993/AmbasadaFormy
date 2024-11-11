import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { map } from 'rxjs';
import { RequestModel } from 'src/app/shared/models';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequestsGymPassesService {
  public requestsSignal: WritableSignal<RequestModel[]>  = signal<RequestModel[]>([] as RequestModel[])
  private url: string = 'http://localhost:5000';
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  public getRequests(): void {
    this.http.get<RequestModel[]>(this.url + "/getRequests").pipe( map(requests => requests.map(request => ({
      ...request,
       requestDate: `${this.datePipe.transform(request.requestDate, 'shortDate')}, ${this.datePipe.transform(request.requestDate, 'HH:mm')}`!
    })))).subscribe(val=>{
        this.requestsSignal.set(val);
    });
  }

}
