import { Component, inject, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GymPassesService } from 'src/app/core/services';
import { GymPassModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-gym-passes',
  templateUrl: './edit-gym-passes.component.html',
  styleUrl: './edit-gym-passes.component.scss'
})
export class AFEditGymPassesComponent implements OnInit {
private gymPassService: GymPassesService = inject(GymPassesService);
private dialogService: DialogService = inject(DialogService);
  public gymPasses: GymPassModel[] = [];
  private ref: DynamicDialogRef;

  public ngOnInit(): void {
    this.gymPasses = this.gymPassService.gymPassesSignal();
    console.log(this.gymPasses);
  }

  public editGymPass(gymPass: GymPassModel): void {
    console.log(gymPass);
  }
  public openAddGymPassDialog():void{
    this.ref = this.dialogService.open(AFEditGymPassesComponent, {
      header: "Dodaj karnet", 
  })
};

  public deleteGymPass(id: string): void {
    console.log(id);
  }
  private getGymPasses(): void {
    if (this.gymPasses.length == 0) {
      this.gymPassService.getGymPasses();
    }
  }
}
