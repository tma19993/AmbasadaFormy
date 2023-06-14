import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private getBlogUrl: string = 'http://localhost:5000/getBlog';

  constructor(private http: HttpClient) {}

  public getBlogData() : Observable<any>{
    return this.http.get<any>(this.getBlogUrl);
  }
}
