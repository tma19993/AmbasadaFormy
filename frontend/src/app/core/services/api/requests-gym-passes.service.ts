import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { RequestModel } from 'src/app/shared/models';


@Injectable({
  providedIn: 'root'
})
export class RequestsGymPassesService {
    private requestsSignal: WritableSignal<RequestModel[]>  = signal<RequestModel[]>([] as RequestModel[])
  private url: string = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  public getRequests(): void {
    this.http.get<RequestModel[]>(this.url + "/getRequests").subscribe(val=>{
        this.requestsSignal.set(val);
    });
  }

  public get requestsData():RequestModel[] {
    return this.requestsSignal();
  }
}
