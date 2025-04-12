import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { AfMessageService, BlogService } from 'src/app/core/services';
import { ApiPostsModel, PostModel } from 'src/app/shared/models';
import { dialogConfig } from 'src/app/shared/constants';
import { EditPostDialogComponent } from './dialogs/edit-post-dialog/edit-post-dialog.component';
import { DeletePostDialogComponent } from './dialogs/delete-post-dialog/delete-post-dialog.component';
import { delay, tap } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'af-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss',
})
export class AFEditBlogComponent implements OnInit {
  private blogService = inject(BlogService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);
  private spinnerService = inject(SpinnerService);
  public posts: Signal<ApiPostsModel> = this.blogService.blogSignal;
   private ref: DynamicDialogRef;

  public ngOnInit(): void {
    this.blogService.getPosts();
  }

  public editPost(post: PostModel): void {
    this.ref = this.dialogService.open(EditPostDialogComponent, {
      data: post,
      header: 'edit post ' + post.title,
      ...dialogConfig,
      width: '20%',
    });
    this.closeDialog(
      'Post ' + post.title + ' has been edited successfully!');
  }

  public deletePost(post: PostModel): void {
  this.ref = this.dialogService.open(DeletePostDialogComponent, {
      data: post,
      header: 'delete post ' + post.title,
      ...dialogConfig,
      width: '20%',
    });
    this.closeDialog(
      'Post ' + post.title + ' has been deleted successfully!');
  }

  private closeDialog(message: string):void{
    this.spinnerService.loadingActivation.set(false);
    this.ref.onClose.pipe(
      delay(1000),
      tap(() => {
        this.blogService.getPosts();
      })
    ).subscribe((val) => {
      if(val){
        this.message.addSuccesMessage(message);
        this.spinnerService.loadingActivation.set(true);
      }
    })
  }
}
