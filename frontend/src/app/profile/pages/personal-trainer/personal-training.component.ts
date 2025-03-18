import { Component, inject, Signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { userDataModel } from 'src/app/shared/models';
import { AFAddTrainingComponent } from './dialogs/add-training/add-training.component';
import { delay, finalize, tap, } from 'rxjs';
import { TrainingModel } from 'src/app/shared/models/training.model';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'af-personal-training',
  templateUrl: './personal-training.component.html',
  styleUrls: ['./personal-training.component.scss']
})
export class AFPersonalTrainingComponent {
  private profileService = inject(ProfileService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);
  private spinnerService = inject(SpinnerService);
  private ref: DynamicDialogRef;
  public removalMode: boolean = false;
  public activationMode: boolean = false;
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;

  public get isTrainingMarkedForDelete(): boolean {
    return !this.userData().trainings?.some(training => training.forDelete === true)!;
  }

  public get isDietMarkedForActive(): boolean {
    return !this.userData().trainings?.some((training) => training.active === true)!;
  }


  public addWorkout(): void {
    this.ref = this.dialogService.open(AFAddTrainingComponent, {
      ...dialogConfig,
      header: "Add training",
    });
    this.ref.onClose.pipe(
      delay(1000),
      tap(() => {
        this.profileService.getUserData();
      })).subscribe((val) => {
        if (val) {
          this.message.addSuccesMessage("Dodano trening");

        }
      })
  }

  public activeActivationMode(): void {
    this.activationMode = !this.activationMode;
    if (this.activationMode == false) {
      this.userData().trainings?.forEach((trainings) => (trainings.active = false));
    }
  }

  public activeTraining(): void {
    const dietToActive = this.userData().diets?.filter(
      (val) => val.active === true
    );
    console.log(dietToActive);
    if (dietToActive?.length != 0) {
      this.updateUserData(this.userData().trainings!, `Aktywowano dietę ${dietToActive![0].title}`);
    }
    else {
      this.updateUserData(this.userData().trainings!, `Deaktywowano dietę`);
    }
    this.activationMode = false;
  }


  public activeRemoveMode(): void {
    this.removalMode = !this.removalMode;
    if (this.removalMode == false) {
      this.userData().trainings?.forEach(training => training.forDelete = false)
    }
  }

  public removeWorkouts(): void {
    this.spinnerService.loadingActivation.set(false);
    const dataToDelete = this.userData().trainings?.filter(val => !val.forDelete && val.forDelete === false);

    this.updateUserData(dataToDelete!, "usunieto trening")
  }

  public selectForDeletion(training: TrainingModel): void {
    if (this.removalMode) training.forDelete = !training.forDelete;
  }


  private updateUserData(data: TrainingModel[], message: string): void {
    this.profileService.updateUserData({ trainings: data }).pipe(
      delay(1000),
      tap(() => {
        this.message.addSuccesMessage(message);
        this.profileService.getUserData();
        this.removalMode = false;
      }),
      finalize(() => {
        this.spinnerService.loadingActivation.set(true);
      })).subscribe();

  }
}
