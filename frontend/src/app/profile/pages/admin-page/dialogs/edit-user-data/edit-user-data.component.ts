import { Component, inject } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrl: './edit-user-data.component.scss'
})
export class AFEditUserDataComponent {
 private profileService: ProfileService = inject(ProfileService);
   private dialogService: DialogService = inject(DialogService);

 public users: userDataModel[];


 public ngOnInit(): void {
    this.users= this.profileService.usersSignal();
 }
 public openEditUserDataDialog(user: userDataModel): void {
  console.log(this.users);
 }
}
