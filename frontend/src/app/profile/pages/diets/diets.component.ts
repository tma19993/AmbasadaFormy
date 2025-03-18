import { Component, inject, Signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { DietModel, userDataModel } from 'src/app/shared/models';
import { AFAddDietComponent } from './dialogs/add-diet/add-diet.component';
import { dialogConfig } from 'src/app/shared/constants';
import { delay, finalize, tap } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'af-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss'],
})
export class AFDietsComponent {
  private dialogService: DialogService = inject(DialogService);
  private profileService: ProfileService = inject(ProfileService);
  private message: AfMessageService = inject(AfMessageService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;
  public removalMode: boolean = false;
  public activationMode: boolean = false;

  public get isDietMarkedForDelete(): boolean {
    return !this.userData().diets?.some((diet) => diet.forDelete === true)!;
  }
  public get isDietMarkedForActive(): boolean {
    return !this.userData().diets?.some((diet) => diet.active === true)!;
  }

  private ref: DynamicDialogRef;

  public addDiet(): void {
    this.spinnerService.loadingActivation.set(false);
    this.ref = this.dialogService.open(AFAddDietComponent, {
      ...dialogConfig,
      header: 'Add diet',
    });

    this.ref.onClose
      .pipe(
        delay(1000),
        tap(() => {
          this.profileService.getUserData();
        }),
        finalize(() => {
          this.spinnerService.loadingActivation.set(true);
        })
      )
      .subscribe((val) => {
        if (val) {
          this.message.addSuccesMessage('Dodano dietę');
        }
      });
  }

  public activeRemoveMode(): void {
    this.removalMode = !this.removalMode;
    if (this.removalMode == false) {
      this.userData().diets?.forEach((diet) => (diet.forDelete = false));
    }
  }

  public removeDiet(): void {
    const dataToDelete = this.userData().diets?.filter(
      (val) => !val.forDelete && val.forDelete === false
    );
    this.updateUserData(dataToDelete!, "usunieto dietę");
    this.removalMode = false;
  }



  public activeActivationMode(): void {
    this.activationMode = !this.activationMode;
    if (this.activationMode == false) {
      this.userData().diets?.forEach((diet) => (diet.active = false));
    }
  }


  public activeDiet(): void {
    const dietToActive = this.userData().diets?.filter(
      (val) => val.active === true
    );
    if (dietToActive?.length != 0) {
      this.updateUserData(this.userData().diets!, `Aktywowano dietę ${dietToActive![0].title}`);
    }
    else {
      this.updateUserData(this.userData().diets!, `Deaktywowano dietę`);
    }
    this.activationMode = false;
  }

  private updateUserData(data: DietModel[], message: string): void {
    this.spinnerService.loadingActivation.set(false);
    this.profileService
      .updateUserData({ diets: data })
      .pipe(
        delay(1000),
        tap(() => {
          this.message.addSuccesMessage(message);
          this.profileService.getUserData();
          this.removalMode = false;
        }),
        finalize(() => {
          this.spinnerService.loadingActivation.set(true);
        })
      )
      .subscribe();
  }
}
