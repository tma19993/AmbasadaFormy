import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BlogService } from 'src/app/core/services';
import { PostModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-post-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-post-dialog.component.html',
  styleUrl: './edit-post-dialog.component.scss'
})
export class EditPostDialogComponent {
private config: DynamicDialogConfig<PostModel> = inject(DynamicDialogConfig);
private blogService = inject(BlogService);
private dialogRef = inject(DynamicDialogRef);
public post = this.config.data!;
}
