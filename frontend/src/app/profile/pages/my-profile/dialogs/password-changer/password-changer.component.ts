import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormGroup, FormSubmittedEvent, NonNullableFormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-password-changer',
  templateUrl: './password-changer.component.html',
  styleUrl: './password-changer.component.scss'
})
export class PasswordChangerComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private message = inject(AfMessageService);
  private translate = inject(TranslateService);
  private profileService = inject(ProfileService);
  private dialogRef = inject(DynamicDialogRef);

  public form: FormGroup = this.fb.group({
    oldPassword: this.fb.control("", Validators.required),
    newPassword: this.fb.control("", Validators.required),
    repeatedNewPassword: this.fb.control("", Validators.required)
  })

  public ngOnInit(): void {
    this.form.events.subscribe(event => {
      if (event instanceof FormSubmittedEvent) {
        this.updatePassword();
      }
    })
  }

  private updatePassword(): void {
    const { oldPassword, newPassword, repeatedNewPassword } = this.form.value;
    if (this.checkPasswords(oldPassword, newPassword, repeatedNewPassword)) {
      const updatedPassword: userDataModel = {
        password: newPassword
      }
      this.profileService.updateUserData(updatedPassword).subscribe();
      this.dialogRef.close(updatedPassword);
      this.dialogRef.destroy();
    }
  }

  private checkPasswords(oldPassword: string, newPassword: string, repeatedNewPassword: string): boolean {
    if (newPassword != repeatedNewPassword) {
      this.message.addErrorMessage(this.translate.instant("profile.myProfile.changePassword.checkPassword"))
      return false;
    }
    else if (oldPassword != this.profileService.userDataSignal().password) {
      this.message.addErrorMessage(this.translate.instant("profile.myProfile.changePassword.incorrectPassword"))
      return false;
    }
    else {
      return true;
    }
  }

}
