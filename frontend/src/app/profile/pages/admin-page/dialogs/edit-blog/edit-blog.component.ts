import { DialogService } from 'primeng/dynamicdialog';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { BlogService } from 'src/app/core/services';
import { ApiPostsModel, PostModel } from 'src/app/shared/models';
import { dialogConfig } from 'src/app/shared/constants';
import { EditPostDialogComponent } from './dialogs/edit-post-dialog/edit-post-dialog.component';
import { DeletePostDialogComponent } from './dialogs/delete-post-dialog/delete-post-dialog.component';

@Component({
  selector: 'af-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss',
})
export class AFEditBlogComponent implements OnInit {
  private blogService = inject(BlogService);
  private dialogService = inject(DialogService);

  public posts: Signal<ApiPostsModel> = this.blogService.blogSignal;

  public ngOnInit(): void {
    this.blogService.getPosts();
    console.log(this.posts);
  }

  public editPost(post: PostModel): void {
    this.dialogService.open(EditPostDialogComponent, {
      data: post,
      header: 'edit post ' + post.title,
      ...dialogConfig,
      width: '20%',
    });
  }

  public deletePost(post: PostModel): void {
    this.dialogService.open(DeletePostDialogComponent, {
      data: post,
      header: 'delete post ' + post.title,
      ...dialogConfig,
      width: '20%',
    });
  }
}
