import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'af-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  public posts: BlogModel[];
  constructor(private blogService: BlogService){}
 public ngOnInit(): void {
  this.getData();
  }

 public getData():void{
  this.blogService.getBlogData().subscribe(res=>{
    this.posts = res;
  })
  }
}
