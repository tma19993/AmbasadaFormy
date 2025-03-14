import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, EMPTY, of } from 'rxjs';
import { ApiPostsModel, PostSearchModel, PostModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { MOCK_POSTS } from '../constants/mocks/post-mock';

@Injectable({
  providedIn: 'root'
})
export class BlogMockService {

  public blogSignal: WritableSignal<ApiPostsModel> = signal<ApiPostsModel>(MOCK_POSTS);

  constructor(private http: HttpClient) { }

  public set setBlogSignal(blog: ApiPostsModel) {
    this.blogSignal.update(() => blog)
  }

  public searchPosts(searchData?: PostSearchModel): Observable<ApiPostsModel> {
    if (searchData) {
      const { title, userName } = searchData;
      const filteredData = MOCK_POSTS.posts.filter(post => post.userName == userName || post.title == title)

      return of({ posts: filteredData, totalRecords: filteredData.length })
    }
    else {
      return of(MOCK_POSTS)
    }
  }


  public addNewPost(data: FormData): Observable<PostModel> {
    return of({ ...MOCK_POSTS.posts[0], title: 'Nowy post' });
  }

  public getPosts(length?: number): void {
    this.blogSignal.set(MOCK_POSTS)
  }
}
