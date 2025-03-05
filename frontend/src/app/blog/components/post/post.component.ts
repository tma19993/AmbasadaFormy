import { Component, inject, Input, OnDestroy } from '@angular/core';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { PostModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostDetailsComponent } from '../../dialogs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { dialogConfig } from 'src/app/shared/constants';
import { FirstThreeSentencePipe } from 'src/app/shared/pipes/first-three-sentence/first-three-sentence.pipe';

@Component({
  selector: 'af-post',
  standalone: true,
  imports: [SharedModule, AFTileComponent, FirstThreeSentencePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnDestroy {
  private dialogService = inject(DialogService);
  @Input({ required: true }) post: PostModel;
  @Input() blockCartStyle: boolean = false;
  private ref: DynamicDialogRef;

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  public openPost(post: PostModel): void {
    this.ref = this.dialogService.open(PostDetailsComponent, {
      data: post,
      header: post.title,
      ...dialogConfig
    })
  }

}
