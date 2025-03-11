import { Component, inject, OnInit, Signal } from '@angular/core';
import { BlogService } from 'src/app/core/services';
import { ApiPostsModel, PostModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss'
})
export class AFEditBlogComponent implements OnInit {
  private blogService = inject(BlogService);

  public posts: Signal<ApiPostsModel> = this.blogService.blogSignal;

  public ngOnInit(): void {
    this.blogService.getPosts();
    console.log(this.posts);
  }

  public openPost(post: PostModel): void {
    //  this.dialogService.open(PostDetailsComponent,{
    //    data: post,
    //    header: post.title,
    //    ...dialogConfig
    //  })
    console.log(post);
  }

}
