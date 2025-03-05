import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormGroup, FormResetEvent, NonNullableFormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { delay } from 'rxjs';
import { BlogService, AfMessageService } from 'src/app/core/services';
import { OneRequiredValidator } from 'src/app/core/validators';
import { dialogConfig } from 'src/app/shared/constants';
import { PostModel, PostSearchModel } from 'src/app/shared/models';
import { NewPostFormComponent } from '../../dialogs';

@Component({
  selector: 'af-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class AFMenuComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private blogService = inject(BlogService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);



  public posts: PostModel[];
  public currentPage: number = 0;
  public firstPosts: number = 0;
  public totalRecords: number;
  public pageSize: number = 5;
  public submitted = signal(false);
  public searchForm: FormGroup = this.fb.group({
    title: [null],
    userName: [null]
  }, { validators: OneRequiredValidator() })

  private ref: DynamicDialogRef;
  constructor() { }

  public ngOnInit(): void {
    this.setFormEvents();
  }

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
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
