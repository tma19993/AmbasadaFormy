import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileService, RequestsGymPassesService } from 'src/app/core/services';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { RequestModel, userDataModel } from 'src/app/shared/models';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { merge, mergeMap } from "rxjs";

@Component({
  selector: 'af-edit-requests-dialog',
  standalone: true,
  imports: [AFButtonComponent, SharedModule],
  templateUrl: './edit-requests-dialog.component.html',
  styleUrl: './edit-requests-dialog.component.scss'
})
export class EditRequestsDialogComponent implements OnInit {
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);
  private profileSerivce: ProfileService = inject(ProfileService);
  private config: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);
  public data: RequestModel;

  ngOnInit(): void {
    this.data = this.config.data;
  }

  public approve(): void {
    const userDataForUpdate: userDataModel = {
      activeGymPass: true,
      gympassId: this.data.gymPassIdToActive,
      gympassName: this.data.gymPassNameToActive
    };
    const requestForUpdate: RequestModel = {
      ...this.data,
      status: "approved"
    }
    this.profileSerivce.updateUserData(userDataForUpdate).pipe(mergeMap(() => this.requestService.editRequest(requestForUpdate))).subscribe();


    this.dialogRef.close(requestForUpdate);

  }
  public reject(): void {
    const requestForUpdate: RequestModel = {
      ...this.data,
      status: "rejected"
    };
    this.requestService.editRequest(requestForUpdate).subscribe();
    this.dialogRef.close(requestForUpdate);
  }

}

// treść tego przyda się do admin-page do aktywowania karnetu
// const { _id, name } = this.config.data.gymPassData as GymPassModel
// const userDataForUpdate: userDataModel = {
//   activeGymPass: true,
//   gympassId: _id,
//   gympassName: name
// };
// this.profileSerivce.updateUserData(userDataForUpdate).subscribe();
// this.dialogRef.close(userDataForUpdate);
