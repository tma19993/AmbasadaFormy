import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BlogService } from 'src/app/core/services';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { PostModel } from 'src/app/shared/models';

@Component({
  selector: 'af-delete-post-dialog',
  standalone: true,
  imports: [AFButtonComponent],
  templateUrl: './delete-post-dialog.component.html',
  styleUrl: './delete-post-dialog.component.scss'
})
export class DeletePostDialogComponent {
private config: DynamicDialogConfig<PostModel> = inject(DynamicDialogConfig);
private blogService = inject(BlogService);
private dialogRef = inject(DynamicDialogRef);
public post = this.config.data!;


public deletePost():void{
  this.blogService.deletePost(this.post._id!).subscribe();
  this.dialogRef.close(this.post);
}
}
