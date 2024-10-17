import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiPostsModel, PostModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private getBlogUrl: string = 'http://localhost:5000/getBlog';

  constructor(private http: HttpClient) {}

  public getBlogData(page: number, size: number) : Observable<ApiPostsModel>{
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiPostsModel>(this.getBlogUrl,{params});
  }
}
