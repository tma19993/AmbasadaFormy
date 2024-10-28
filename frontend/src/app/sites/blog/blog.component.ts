import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostModel, PageEventModel, PostSearchModel } from 'src/app/features/models';
import { EnumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewPostFormComponent } from 'src/app/features/components';
import { BlogService } from 'src/app/api';
import { AfMessageService } from 'src/app/features';
import { OneRequiredValidator } from 'src/app/features/validators/one-required.validator';
import { delay } from 'rxjs';
import { PostDetailsComponent } from 'src/app/features/components/post-details/post-details.component';
@Component({
  selector: 'af-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  public posts: PostModel[];
  public currentPage: number = 0;
  public totalRecords: number;
  public pageSize: number = 5;
  public searchForm: FormGroup;
  public searchIconConfig: inputIconConfig = {
    iconClassName: "pi-search",
    iconFloat: EnumIconFloat.left
  }
  private  ref: DynamicDialogRef | undefined;

  constructor(private blogService: BlogService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private message: AfMessageService) { }

  public ngOnInit(): void {
    this.initForm();
    this.loadPosts();  
  }

  public ngOnDestroy():void {
    if (this.ref) {
        this.ref.close();
    }
}

  public onPageChange(event: PageEventModel):void {
    this.currentPage = event.page;
    this.pageSize = event.rows;
    this.loadPosts();
  }

  public loadDefault(): void {
    if (this.searchForm.valid) {
      this.searchForm.reset();
      this.searchForm.updateValueAndValidity();
      this.loadPosts();
    }
  }

  public openPost(post: PostModel): void{
    this.dialogService.open(PostDetailsComponent,{
      data: post,
      header: post.title,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closeOnEscape: true
    })
  }

  public search(): void {
    if (this.searchForm.valid) {
      this.loadPosts({ ...this.searchForm.value });
    }
  }

  public addNewPost(): void {
    this.ref = this.dialogService.open(NewPostFormComponent, {
      header: "Add new Post",
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    })
    this.ref.onClose.pipe(delay(1000)).subscribe((value) => {
      if(value){
      this.message.addSuccesMessage("dodano post");
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

  private initForm(): void {
    this.searchForm = this.formBuilder.group({
      title: [null],
      userName: [null]
    },{validators: OneRequiredValidator()})
  }

}
