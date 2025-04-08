import { Component, inject } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-permissions',
  templateUrl: './edit-permissions.component.html',
  styleUrl: './edit-permissions.component.scss'
})
export class AFEditPermissionsComponent {
 private profileService: ProfileService = inject(ProfileService);
   private dialogService: DialogService = inject(DialogService);

 public users: userDataModel[];


 public ngOnInit(): void {
    this.users= this.profileService.usersSignal();
 }
 public openChangePerrmisionDialog(user: userDataModel): void {
  console.log(this.users);
 }
}
