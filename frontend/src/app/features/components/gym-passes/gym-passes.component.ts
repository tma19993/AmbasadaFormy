import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { delay } from 'rxjs';
import { AfMessageService, GymPassesService, ProfileService } from 'src/app/core/services';

import { GymPassModel, userDataModel } from 'src/app/shared/models';
import { OrderGymPassComponent } from '../../dialogs';

@Component({
  selector: 'app-gym-passes',
  templateUrl: './gym-passes.component.html',
  styleUrls: ['./gym-passes.component.scss']
})
export class GymPassesComponent implements OnInit, OnDestroy {

  private ref: DynamicDialogRef | undefined;

  constructor(
    private profileService: ProfileService,
    private gymPassesService: GymPassesService,
    private dialogService: DialogService,
    private message: AfMessageService

  ) { }

  public ngOnInit(): void {
    this.getGymPasses();
  }
  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  public changeGymPass(gymPassData: GymPassModel): void {
    this.dialogConfig(false,gymPassData);
  }

  public DeactivePass(): void {
    this.dialogConfig(true);
  }


  private getGymPasses(): void {
    if (this.gymPassesService.gymPasses.length == 0) {
      this.gymPassesService.getGymPasses();
    }

  }

  public get userData(): userDataModel {
    return this.profileService.userData;
  }

  public get gymPasses(): GymPassModel[] {
    return this.gymPassesService.gymPasses;
  }

  private dialogConfig(deactive:boolean = false, gymPassData?:GymPassModel):void{
      const header = deactive ? "Deactive pass" : gymPassData?.name + " Pass";
      const data = deactive ? {
        deactiveGymPass: true
      }: {
        gymPassData: gymPassData
      };
    this.ref = this.dialogService.open(OrderGymPassComponent, {
      width: "14%",
      header: header,
      data:data
    })
    this.ref.onClose.pipe(
      delay(1000)
    ).subscribe((val) => {
      if(val){
        this.message.addSuccesMessage("Zmieniono Karnet");
        this.profileService.getUserData()
      }
    })
  }

}
