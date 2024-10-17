import { Component, OnInit } from '@angular/core';
import { PostModel, PageEventModel } from 'src/app/models';

import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'af-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  public posts: PostModel[];
  public currentPage: number = 0;
  public totalRecords: number;
  public pageSize: number = 5;

  constructor(private blogService: BlogService){}
  
 public ngOnInit(): void {
  this.loadPosts();
  }

 public loadPosts():void{
  this.blogService.getBlogData(this.currentPage + 1, this.pageSize).subscribe(data=>{
    this.posts = data.posts;
    console.log(data);
    this.totalRecords = data.totalRecords;
  })
  }

  public onPageChange(event: PageEventModel) {
    this.currentPage = event.page;
    this.pageSize = event.rows;
    this.loadPosts();
}

}
