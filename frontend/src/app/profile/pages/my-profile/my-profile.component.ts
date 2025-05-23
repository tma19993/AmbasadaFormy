import { ChangeDetectionStrategy, Component, inject, OnDestroy, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { userDataModel } from 'src/app/shared/models';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { delay } from 'rxjs';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import {
  PasswordChangerComponent,
  ProfileDataEditorComponent,
} from './dialogs/';
import { dialogConfig } from 'src/app/shared/constants';

@Component({
  selector: 'af-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AFMyProfileComponent implements OnDestroy {
  private router = inject(Router);
  private profileService = inject(ProfileService);
  private dialogService = inject(DialogService);
  private message = inject(AfMessageService);

  private ref: DynamicDialogRef;

  public userData: Signal<userDataModel> = this.profileService.userDataSignal;

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  public removeUser(): void {
    this.profileService.removeUser().subscribe(() => {
      setTimeout(() => {
        sessionStorage.clear();
        this.router.navigate(['']);
      }, 2000);
    });
  }

  public onUpload(event: any): void {
    this.profileService.photoUpdate(event).subscribe(() => {
      window.location.reload();
    });
  }

  public changePassword(): void {
    this.ref = this.dialogService.open(PasswordChangerComponent, {
      ...dialogConfig,
      header: 'Change Password',
    });
    this.closeDialogs('Zmieniono Hasło');
  }

  public editProfileData(): void {
    this.ref = this.dialogService.open(ProfileDataEditorComponent, {
      ...dialogConfig,
      header: 'Edit Profile Data',
    });
    this.closeDialogs('Zmieniono Dane Użytkownika');
  }

  private closeDialogs(message: string): void {
    this.ref.onClose.pipe(delay(1000)).subscribe((val) => {
      if (val) {
        this.message.addSuccesMessage(message);
        this.profileService.getUserData();
      }
    });
  }
}
