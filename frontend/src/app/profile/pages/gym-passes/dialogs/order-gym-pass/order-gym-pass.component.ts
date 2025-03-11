import { Component, inject, OnInit, Signal } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ProfileService, RequestsGymPassesService } from 'src/app/core/services';
import { GymPassModel, RequestModel, userDataModel } from 'src/app/shared/models';


@Component({
  selector: 'af-order-gym-pass',
  templateUrl: './order-gym-pass.component.html',
  styleUrl: './order-gym-pass.component.scss'
})
export class OrderGymPassComponent implements OnInit {
  private profileSerivce: ProfileService = inject(ProfileService);
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);
  public deactiveGymPass: boolean = false;
  public userData: Signal<userDataModel> = this.profileSerivce.userDataSignal;

  public ngOnInit(): void {
    if (this.config.data.deactiveGymPass) this.deactiveGymPass = this.config.data.deactiveGymPass
  }

  public deactivedGymPass(): void {
    const userDataForUpdate: userDataModel = {
      activeGymPass: false,
      gympassId: undefined,
      gympassName: undefined
    };
    this.profileSerivce.updateUserData(userDataForUpdate).subscribe();
    this.dialogRef.close(userDataForUpdate);
    this.dialogRef.destroy();
  }

  public orderNewGymPass(): void {
    const { _id, name } = this.config.data.gymPassData as GymPassModel;
    const requestsData: RequestModel = {
      userId: this.userData()._id,
      userName: this.userData().login!,
      gymPassIdToActive: _id,
      gymPassNameToActive: name,
      requestDate: new Date(),
      status: "pending"
    }

    this.requestService.addRequest(requestsData).subscribe(val => {
      console.log(val);
    })
    this.dialogRef.close(requestsData);
    this.dialogRef.destroy();
  }

}
