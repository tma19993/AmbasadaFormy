import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormResetEvent, FormSubmittedEvent, NonNullableFormBuilder } from '@angular/forms';
import { ApiPostsModel, PostModel } from 'src/app/shared/models';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { delay } from 'rxjs';

import { AfMessageService, BlogService } from 'src/app/core/services';
import { OneRequiredValidator } from 'src/app/core/validators';
import { dialogConfig } from 'src/app/shared/constants';
import { NewPostFormComponent, PostDetailsComponent } from './dialogs';

@Component({
  selector: 'af-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder)
  private blogService = inject(BlogService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);

  public submitted = signal(false);

  public length: number = 13;
  public apiPostsLength: number;
  public apiPosts: WritableSignal<ApiPostsModel> = this.blogService.blogSignal;
  public searchMode: boolean;
  public searchForm: FormGroup = this.fb.group({
    title: [null],
    userName: [null]
  }, { validators: OneRequiredValidator() })

  private ref: DynamicDialogRef;

  public ngOnInit(): void {
    this.loadPosts();
    this.setFormEvents();
  }

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }


  public openPost(post: PostModel): void {
    this.dialogService.open(PostDetailsComponent, {
      data: post,
      header: post.title,
      ...dialogConfig
    })
  }

  public loadMore(): void {
    this.blogService.getPosts(this.length += 8)
  }


  public addNewPost(): void {
    this.ref = this.dialogService.open(NewPostFormComponent, {
      header: "Add new Post",
      ...dialogConfig
    })
    this.ref.onClose.pipe(delay(1000)).subscribe((value) => {
      if (value) {
        this.message.addSuccesMessage("dodano post");
        this.loadPosts();
      }
    })
  }

  public setSearchMode(searchMode: boolean): void {
    this.searchMode = searchMode;
  }

  private loadPosts(): void {
    this.blogService.getPosts(this.length)
  }

  private setFormEvents(): void {
    this.searchForm.events.subscribe(event => {
      if ((event instanceof FormResetEvent)) {
        this.resetForm();
      }
      if ((event instanceof FormSubmittedEvent)) {
        this.search();
      }
    })
  }

  private search(): void {
    if (this.searchForm.valid) {
      this.blogService.searchPosts({ ...this.searchForm.value }).subscribe({
        next: data => {
          this.searchMode = true;
          this.apiPosts.set(data);
          this.apiPostsLength = data.totalRecords;
        }
      })
    }
  }
  private resetForm(): void {
    this.submitted.set(false);
    this.searchMode = false;
    this.loadPosts();
  }

}
