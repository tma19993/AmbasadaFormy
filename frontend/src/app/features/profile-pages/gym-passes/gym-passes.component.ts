import { Component, inject, OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { delay } from 'rxjs';
import { AfMessageService, GymPassesService, ProfileService } from 'src/app/core/services';

import { GymPassModel, userDataModel } from 'src/app/shared/models';
import { OrderGymPassComponent } from '../../dialogs';

@Component({
  selector: 'af-gym-passes',
  templateUrl: './gym-passes.component.html',
  styleUrls: ['./gym-passes.component.scss']
})
export class AFGymPassesComponent implements OnInit, OnDestroy {
  private profileService: ProfileService = inject(ProfileService);
  private gymPassesService: GymPassesService = inject(GymPassesService);
  private dialogService: DialogService = inject(DialogService);
  private message: AfMessageService = inject(AfMessageService);

  public userData: Signal<userDataModel> = this.profileService.userDataSignal;
  public gymPasses: Signal<GymPassModel[]> = this.gymPassesService.gymPassesSignal;

  private ref: DynamicDialogRef | undefined;

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
    if (this.gymPasses().length == 0) {
      this.gymPassesService.getGymPasses();
    }
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
