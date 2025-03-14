import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApiPostsModel, PostModel, PostSearchModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public blogSignal: WritableSignal<ApiPostsModel> = signal<ApiPostsModel>({} as ApiPostsModel);
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public set setBlogSignal(blog: ApiPostsModel) {
    this.blogSignal.update(() => blog)
  }


  public searchPosts(searchData?: PostSearchModel): Observable<ApiPostsModel> {
    if (searchData && (searchData.title != null || searchData.userName != null)) {
      const { title, userName } = searchData;
      const params: HttpParams = new HttpParams({
        fromObject: {
          "title": title!,
          "userName": userName!,
        }
      })
      return this.http.get<ApiPostsModel>(this.url + "/searchPosts", { params })
    }
    else {
      return EMPTY;
    }
  }


  public addNewPost(data: FormData): Observable<PostModel> {
    return this.http.post<PostModel>(this.url + "/addPost", data);
  }

  public getPosts(length?: number): void {
    let params: HttpParams;
    if (length) {
      params = new HttpParams({
        fromObject: {
          "length": length
        }
      })
      this.http.get<ApiPostsModel>(this.url + "/getPosts", { params }).subscribe(val => {
        this.blogSignal.set(val);
      })
    }
    else {
      this.http.get<ApiPostsModel>(this.url + "/getPosts",).subscribe(val => {
        this.blogSignal.set(val);
      })
    }

  }

}
