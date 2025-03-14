import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { userDataModel } from 'src/app/shared/models';
import { AFAddTrainingComponent } from './dialogs/add-training/add-training.component';
import { delay, finalize, tap, } from 'rxjs';
import { TrainingModel } from 'src/app/shared/models/training.model';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'af-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.scss']
})
export class AFPersonalTrainerComponent {
  private profileService = inject(ProfileService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);
  private spinnerService = inject(SpinnerService);
  private ref: DynamicDialogRef;


  public get userData(): userDataModel {
    return this.profileService.userDataSignal();
  }

  public get isTrainingMarkedForDelete(): boolean {
    return !this.userData.trainings?.some(training => training.forDelete === true)!;
  }
  public removalMode = false;

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

  public activeRemoveMode(): void {
    this.removalMode = !this.removalMode;
    if (this.removalMode == false) {
      this.userData.trainings?.forEach(training => training.forDelete = false)
    }
  }

  public removeWorkouts(): void {
    this.spinnerService.loadingActivation.set(false);
    const dataToDelete = this.userData.trainings?.filter(val => !val.forDelete && val.forDelete === false);
    this.profileService.updateUserData({ trainings: dataToDelete }).pipe(
      delay(1000),
      tap(() => {
        this.message.addSuccesMessage("usunieto trening");
        this.profileService.getUserData();
        this.removalMode = false;
      }),
      finalize(() => {
        this.spinnerService.loadingActivation.set(true);
      })).subscribe();

  }

  public selectForDeletion(training: TrainingModel): void {
    if (this.removalMode) training.forDelete = !training.forDelete;
  }

}
