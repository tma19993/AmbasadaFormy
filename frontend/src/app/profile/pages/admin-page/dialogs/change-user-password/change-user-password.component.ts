import { Component, effect, inject, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrl: './change-user-password.component.scss'
})
export class AFChangeUserPasswordComponent implements OnInit {
 private profileService: ProfileService = inject(ProfileService);
   private dialogService: DialogService = inject(DialogService);

 public users: userDataModel[];


 public ngOnInit(): void {
    this.users= this.profileService.usersSignal();
 }
 public openChangePasswordDialog(user: userDataModel): void {
  console.log(this.users);
 }
    
}
