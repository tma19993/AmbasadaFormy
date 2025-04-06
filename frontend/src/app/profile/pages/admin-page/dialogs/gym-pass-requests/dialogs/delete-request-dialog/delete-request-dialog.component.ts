import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RequestsGymPassesService } from 'src/app/core/services';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { RequestModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-delete-request-dialog',
  standalone: true,
  imports: [AFButtonComponent, SharedModule],
  templateUrl: './delete-request-dialog.component.html',
  styleUrl: './delete-request-dialog.component.scss'
})
export class DeleteRequestDialogComponent {
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);
  private config: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);
  public data: RequestModel;

  ngOnInit(): void {
    this.data = this.config.data;
  }

  public deleteRequest(): void {
    this.requestService.deleteRequest(this.data._id!).subscribe();
    this.dialogRef.close(this.data);

  }
}
