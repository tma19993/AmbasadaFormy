import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostModel } from 'src/app/shared/models';

@Component({
  selector: 'af-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  public postData: PostModel;
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef) {
    this.postData = this.dialogService.data;
  }


  public close(): void {
    this.ref.close();
  }
}
