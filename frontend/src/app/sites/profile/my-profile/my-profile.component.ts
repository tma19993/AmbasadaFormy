import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDataModel } from 'src/app/features/models';
import { ProfileService } from 'src/app/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PasswordChangerComponent } from 'src/app/features/components/password-changer/password-changer.component';
import { dialogConfig } from 'src/app/features';
import { ProfileDataEditorComponent } from 'src/app/features/components/profile-data-editor/profile-data-editor.component';
@Component({
  selector: 'app-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private dialogService: DialogService
  ) {}


  public removeUser(): void {
    this.profileService.removeUser().subscribe(() => {
      setTimeout(() => {
        sessionStorage.clear();
        this.router.navigate(['/welcome']);
      }, 2000)
    });
  }

  public onUpload(event: any): void {
    this.profileService.photoUpdate(event).subscribe(() => {
      window.location.reload();
    });
  }

  public changePassword():void {
    this.dialogService.open(PasswordChangerComponent,{
      ...dialogConfig,
      header: "Change Password"
    })
  }

  public editProfileData():void {
    this.dialogService.open(ProfileDataEditorComponent,{
      ...dialogConfig,
      header: "Edit Profile Data"
    })
  }

  public get userData(): userDataModel {
    return this.profileService.userData;
  }
}
