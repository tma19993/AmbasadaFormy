import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { userDataModel } from 'src/app/shared/models';
import { AFAddTrainingComponent } from './dialogs/add-training/add-training.component';
import { delay, finalize, tap, } from 'rxjs';
import { TrainingModel } from 'src/app/shared/models/training.model';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { areArraysEqual } from 'src/app/shared/utils';

@Component({
  selector: 'af-personal-training',
  templateUrl: './personal-training.component.html',
  styleUrls: ['./personal-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AFPersonalTrainingComponent {
  private profileService = inject(ProfileService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);
  private spinnerService = inject(SpinnerService);
  private ref: DynamicDialogRef;
  public removalMode: boolean = false;
  public activationMode: boolean = false;
  public trainings: Signal<TrainingModel[]> = computed(() => this.profileService.userDataSignal().trainings!);
  private initialTrainigs: TrainingModel[] = [];

  constructor() {
    effect(() => {
      if (this.trainings()) this.initialTrainigs = JSON.parse(JSON.stringify(this.trainings()));
    })
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
      if (!areArraysEqual<TrainingModel>(this.initialTrainigs, this.trainings())) {
        this.profileService.userDataSignal.update(userData => ({ ...userData, trainings: this.initialTrainigs }))
      }
      this.trainings().forEach((training) => {
        training.disabled = false;
      });
    }
  }

  public activeTraining(): void {
    const trainingsToActive = this.trainings()?.filter(
      (val) => val.active === true
    );
    if (trainingsToActive?.length != 0) {
      this.updateUserData(this.trainings(), `Aktywowano dietę ${trainingsToActive![0].title}`);
    }
    else {
      this.updateUserData(this.trainings(), `Deaktywowano dietę`);
    }
    this.activationMode = false;
  }


  public activeRemoveMode(): void {
    this.removalMode = !this.removalMode;
    if (this.removalMode == false) {
      this.trainings().forEach(training => training.forDelete = false)
    }
  }

  public removeWorkouts(): void {
    const dataToDelete = this.trainings().filter(val => !val.forDelete && val.forDelete === false);
    this.updateUserData(dataToDelete!, "usunieto trening")
  }

  public selectForDeletion(training: TrainingModel): void {
    if (this.removalMode) training.forDelete = !training.forDelete;
  }


  private updateUserData(data: TrainingModel[], message: string): void {
    this.spinnerService.loadingActivation.set(false);
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
