import { Component, inject, Signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { DietModel, userDataModel } from 'src/app/shared/models';
import { AFAddDietComponent } from '../../dialogs/add-diet/add-diet.component';
import { dialogConfig } from 'src/app/shared/constants';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class AFDietsComponent {
  private dialogService: DialogService = inject(DialogService);
  private profileService: ProfileService = inject(ProfileService);
  private message: AfMessageService = inject(AfMessageService);
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;
  public removalMode: boolean = false;

  public get isDietMarkedForDelete(): boolean {
    return !this.userData().diets?.some(diet => diet.forDelete === true)!;
  }

  private ref: DynamicDialogRef;

  public addDiet(): void {
    this.ref = this.dialogService.open(AFAddDietComponent, {
      ...dialogConfig,
      header: "Add diet",
    })

    this.ref.onClose.pipe(
      delay(1000),
      tap(() => {
        this.profileService.getUserData();
      })).subscribe((val) => {
        if (val) {
          this.message.addSuccesMessage("Dodano dietę");
        }
      })
  }

  public selectForDeletion(diet: DietModel): void {
    if (this.removalMode) diet.forDelete = !diet.forDelete;
  }

  public activeRemoveMode(): void {
    this.removalMode = !this.removalMode;
    if (this.removalMode == false) {
      this.userData().diets?.forEach(diet => diet.forDelete = false)
    }
  }

  public removeWorkouts(): void {
    const dataToDelete = this.userData().diets?.filter(val => !val.forDelete && val.forDelete === false);
    this.profileService.updateUserData({ diets: dataToDelete }).pipe(
      delay(1000),
      tap(() => {
        this.message.addSuccesMessage("usunieto dietę");
        this.profileService.getUserData();
        this.removalMode = false;
      })).subscribe();

  }

}
