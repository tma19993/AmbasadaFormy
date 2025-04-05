import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { DietModel } from 'src/app/shared/models';
import { AFAddDietComponent } from './dialogs/add-diet/add-diet.component';
import { dialogConfig } from 'src/app/shared/constants';
import { delay, finalize, tap } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { areArraysEqual } from 'src/app/shared/utils';

@Component({
  selector: 'af-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AFDietsComponent {
  private dialogService: DialogService = inject(DialogService);
  private profileService: ProfileService = inject(ProfileService);
  private message: AfMessageService = inject(AfMessageService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  public removalMode: boolean = false;
  public activationMode: boolean = false;
  public diets: Signal<DietModel[]> = computed(() => this.profileService.userDataSignal().diets!);
  private initialDiets: DietModel[];
  private ref: DynamicDialogRef;

  constructor() {
    effect(() => {
      if (this.diets()) this.initialDiets = JSON.parse(JSON.stringify(this.diets()));
    });
  }

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
      this.diets().forEach((diet) => (diet.forDelete = false));
    }
  }

  public removeDiet(): void {
    const dataToDelete = this.diets().filter(
      (val) => !val.forDelete && val.forDelete === false
    );
    this.updateUserData(dataToDelete!, "usunieto dietę");
    this.removalMode = false;
  }

  public activeActivationMode(): void {
    this.activationMode = !this.activationMode;
    if (this.activationMode == false) {
      if (!areArraysEqual<DietModel>(this.initialDiets, this.diets())) {
        this.profileService.userDataSignal.update(userData => ({ ...userData, diets: this.initialDiets }))
      }
      this.diets().forEach((diet) => {
        diet.disabled = false;
      });
    }
  }

  public activeDiet(): void {
    const dietToActive = this.diets().filter(
      (val) => val.active === true
    );
    if (dietToActive?.length != 0) {
      this.updateUserData(this.diets(), `Aktywowano dietę ${dietToActive![0].title}`);
    }
    else {
      this.updateUserData(this.diets(), `Deaktywowano dietę`);
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

  // private areArraysEqual(arr1: DietModel[], arr2: DietModel[]): boolean {
  //   return arr1.length === arr2.length && arr1.every((item, index) =>
  //     JSON.stringify(item) === JSON.stringify(arr2[index])
  //   );
  // }
}
