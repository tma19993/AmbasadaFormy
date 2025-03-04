import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { userDataModel } from 'src/app/shared/models';
import { AFAddTrainingComponent } from './dialogs/add-training/add-training.component';
import { delay, tap, } from 'rxjs';
import { TrainingModel } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.scss']
})
export class AFPersonalTrainerComponent {
  private profileService: ProfileService = inject(ProfileService);
  private dialogService: DialogService = inject(DialogService);
  private message: AfMessageService = inject(AfMessageService);

  private ref: DynamicDialogRef;


  public get userData(): userDataModel {
    return this.profileService.userDataSignal();
  }

  public get isTrainingMarkedForDelete(): boolean {
    return !this.userData.trainings?.some(training => training.forDelete === true)!;
  }
  public removalMode: boolean = false;

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
    const dataToDelete = this.userData.trainings?.filter(val => !val.forDelete && val.forDelete === false);
    this.profileService.updateUserData({ trainings: dataToDelete }).pipe(
      delay(1000),
      tap(() => {
        this.message.addSuccesMessage("usunieto trening");
        this.profileService.getUserData();
        this.removalMode = false;
      })).subscribe();

  }

  public selectForDeletion(training: TrainingModel): void {
    if (this.removalMode) training.forDelete = !training.forDelete;
  }

}
