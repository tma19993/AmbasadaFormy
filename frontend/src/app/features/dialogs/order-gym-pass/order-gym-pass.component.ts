import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GymPassModel, userDataModel } from '../../../shared/models';
import { ProfileService } from 'src/app/core/services';


@Component({
  selector: 'app-order-gym-pass',
  templateUrl: './order-gym-pass.component.html',
  styleUrl: './order-gym-pass.component.scss'
})
export class OrderGymPassComponent implements OnInit {
  private  profileSerivce: ProfileService = inject(ProfileService);
  private  dialogRef: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  public deactiveGymPass: boolean = false;

  public ngOnInit(): void {
    if(this.config.data.deactiveGymPass) this.deactiveGymPass = this.config.data.deactiveGymPass
  }

  public deactivedGymPass():void {
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
    const { _id, name } = this.config.data.gymPassData as GymPassModel
    const userDataForUpdate: userDataModel = {
      activeGymPass: true,
      gympassId: _id,
      gympassName: name
    };

    this.profileSerivce.updateUserData(userDataForUpdate).subscribe();
    this.dialogRef.close(userDataForUpdate);
    this.dialogRef.destroy();
  }
  
}
