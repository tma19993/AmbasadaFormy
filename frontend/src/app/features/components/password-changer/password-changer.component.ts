import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormSubmittedEvent, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AfMessageService } from '../../../shared/services/message';
import { TranslateService } from '@ngx-translate/core';
import { userDataModel } from '../../../shared/models';
import { ProfileService } from 'src/app/shared/services/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-password-changer',
  templateUrl: './password-changer.component.html',
  styleUrl: './password-changer.component.scss'
})
export class PasswordChangerComponent implements OnInit{
 private fb = inject(NonNullableFormBuilder);
 private message = inject(AfMessageService);
 private translate = inject(TranslateService); 
 private profileService = inject(ProfileService); 
 private dialogRef = inject(DynamicDialogRef); 

 public form: FormGroup = this.fb.group({
  oldPassword:  this.fb.control("",Validators.required),
  newPassword:  this.fb.control("",Validators.required),
  repeatedNewPassword:  this.fb.control("",Validators.required)
 })

 public ngOnInit():void {
  this.form.events.subscribe(event=>{
    if(event instanceof FormSubmittedEvent){
      this.updatePassword();
    }
  })
 }

 private updatePassword(): void {
  const {oldPassword,newPassword, repeatedNewPassword} = this.form.value;
  if(this.checkPasswords(oldPassword,newPassword, repeatedNewPassword)){
  const updatedPassword: userDataModel = {
    password: newPassword
  }
  this.profileService.updateUserData(updatedPassword).subscribe(val=>{console.log(val)});
  this.dialogRef.close(updatedPassword);
    this.dialogRef.destroy();
  }
 }

 public get userData(): userDataModel {
  return this.profileService.userData;
}

private checkPasswords(oldPassword: string,newPassword: string, repeatedNewPassword: string): boolean {
  if(newPassword != repeatedNewPassword){
    this.message.addErrorMessage(this.translate.instant("profile.myProfile.changePassword.checkPassword"))
    return false;
  }
  else if(oldPassword != this.userData.password){
    this.message.addErrorMessage(this.translate.instant("profile.myProfile.changePassword.incorrectPassword"))
    return false;
  }
    else {
       return true;
    }
}

}
