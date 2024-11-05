import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiPostsModel, PostModel, PostSearchModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getBlogData(page: number, size: number, searchData?: PostSearchModel): Observable<ApiPostsModel> {
    let params;
    if(searchData && (searchData.title != null  || searchData.userName != null )){
      const {title, userName } = searchData;
      params = new HttpParams().set("title",title!).set("userName",userName!).set('page', page).set('size', size);
    }
    else{
      params = new HttpParams().set('page', page).set('size', size);
    }
    return this.http.get<ApiPostsModel>(this.url + "/getBlog", { params });
  }

  public addNewPost(data: FormData): Observable<FormData> {
    data.append('userId',sessionStorage.getItem("id")!)
    return this.http.post<FormData>(this.url + "/addPost", data);
  }
}
