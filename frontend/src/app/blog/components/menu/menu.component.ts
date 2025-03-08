import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { FormGroup, FormResetEvent, FormSubmittedEvent, NonNullableFormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { delay } from 'rxjs';
import { BlogService, AfMessageService } from 'src/app/core/services';
import { OneRequiredValidator } from 'src/app/core/validators';
import { dialogConfig } from 'src/app/shared/constants';
import { PostModel, PostSearchModel } from 'src/app/shared/models';
import { NewPostFormComponent } from '../../dialogs';

@Component({
  selector: 'af-menu-blog',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class AFMenuComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private blogService = inject(BlogService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);

  @Input() length: number;
  @Output() searchMode: EventEmitter<boolean> = new EventEmitter<boolean>()
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

  public addNewPost(): void {
    this.ref = this.dialogService.open(NewPostFormComponent, {
      header: "Add new Post",
      ...dialogConfig
    })
    this.ref.onClose.pipe(delay(1000)).subscribe((value) => {
      if (value) {
        this.message.addSuccesMessage("dodano post");
        this.blogService.getPosts(this.length);
      }
    })
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
          this.searchMode.emit(true);
          this.blogService.setBlogSignal = data;

        }
      })
    }
  }

  private resetForm(): void {
    this.submitted.set(false);
    this.searchMode.emit(false);
    this.blogService.getPosts(this.length);
  }
}
