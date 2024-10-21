import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostModel, PageEventModel } from 'src/app/models';

import { BlogService } from 'src/app/services/blog.service';
import { EnumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewPostFormComponent } from 'src/app/features/components';
import { AfMessageService } from 'src/app/services';
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
    private messageService: AfMessageService) { }

  public ngOnInit(): void {
    this.loadPosts();
    this.initForm();
  }

  public ngOnDestroy():void {
    if (this.ref) {
        this.ref.close();
    }
}

  public onPageChange(event: PageEventModel) {
    this.currentPage = event.page;
    this.pageSize = event.rows;
    this.loadPosts();
  }

  public search(): void {
  console.log(this.searchForm.value);
  }

  public addNewPost(): void {
  this.ref = this.dialogService.open(NewPostFormComponent,{
    header: "Add new Post",
    width: '50%',
    contentStyle: { overflow: 'auto' },
    baseZIndex: 10000,

})

this.ref.onClose.subscribe((post:any)=>{
  if(post){
    this.messageService.addSuccesMessage("dodano")
  }else{
    this.messageService.addErrorMessage("nie dodano")
  }
})
  }

  private loadPosts(): void {
    this.blogService.getBlogData(this.currentPage + 1, this.pageSize).subscribe(data => {
      this.posts = data.posts;
      this.totalRecords = data.totalRecords;
    })
  }

  private initForm(): void {
    this.searchForm = this.formBuilder.group({
      title: [""],
      userName: [""]
    })
  }

}
