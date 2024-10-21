import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiPostsModel, PostModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getBlogData(page: number, size: number): Observable<ApiPostsModel> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiPostsModel>(this.url + "/getBlog", { params });
  }

  public addNewPost(data: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.url + "/addPost", data);
  }
}
