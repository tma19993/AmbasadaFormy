import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiPostsModel, PostModel, PostSearchModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public postsSignal: WritableSignal<PostModel[]> = signal<PostModel[]>([]);
  private url: string = 'http://localhost:5000/AmbasadaFormy';

  constructor(private http: HttpClient) { }

  public getBlogData(page: number, size: number, searchData?: PostSearchModel): Observable<ApiPostsModel> {
    let params: HttpParams;
    if (searchData && (searchData.title != null || searchData.userName != null)) {
      const { title, userName } = searchData;
      params = new HttpParams({
        fromObject: {
          "title": title!,
          "userName": userName!,
          'page': page,
          'size': size
        }
      })
    }
    else {
      params = new HttpParams({
        fromObject: {
          'page': page,
          'size': size
        }
      })
    }
    return this.http.get<ApiPostsModel>(this.url + "/getBlog", { params });
  }

  public addNewPost(data: FormData): Observable<FormData> {
    data.append('userId', sessionStorage.getItem('id')!)
    return this.http.post<FormData>(this.url + "/addPost", data);
  }

  public getPosts(): void {
    this.http.get<PostModel[]>(this.url + "/getPosts").subscribe(val => {
      this.postsSignal.set(val);
    })
  }
}
