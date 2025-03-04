import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormGroup, FormResetEvent, NonNullableFormBuilder } from '@angular/forms';
import { PostModel, PageEventModel, PostSearchModel } from 'src/app/shared/models';
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

  public posts: PostModel[];
  public currentPage: number = 0;
  public firstPosts: number = 0;
  public totalRecords: number;
  public pageSize: number = 5;
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

  public onPageChange(event: PageEventModel): void {
    this.currentPage = event.page!;
    this.firstPosts = event.first!;
    this.pageSize = event.rows!;
    const searchData = this.searchForm.value ? { ...this.searchForm.value } : undefined;
    this.loadPosts(searchData);
  }

  public openPost(post: PostModel): void {
    this.dialogService.open(PostDetailsComponent, {
      data: post,
      header: post.title,
      ...dialogConfig
    })
  }

  public search(): void {
    if (this.searchForm.valid) {
      this.currentPage = 0;
      this.firstPosts = 0;
      this.loadPosts({ ...this.searchForm.value });
    }
  }

  public addNewPost(): void {
    this.ref = this.dialogService.open(NewPostFormComponent, {
      header: "Add new Post",
      ...dialogConfig
    })
    this.ref.onClose.pipe(delay(1000)).subscribe((value) => {
      if (value) {
        this.message.addSuccesMessage("dodano post");
        this.currentPage = 0;
        this.firstPosts = 0;
        this.loadPosts();
      }
    })
  }

  private loadPosts(searchData?: PostSearchModel): void {
    this.blogService.getBlogData(this.currentPage + 1, this.pageSize, searchData).subscribe(data => {
      this.posts = data.posts;
      this.totalRecords = data.totalRecords;
    })
  }

  private setFormEvents(): void {
    this.searchForm.events.subscribe(event => {
      if ((event instanceof FormResetEvent)) {
        this.submitted.set(false);
        this.currentPage = 0;
        this.firstPosts = 0;
        this.loadPosts();
      }
    })
  }

}
