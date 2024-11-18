import { Component, inject, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { delay, tap } from 'rxjs';

import { OrderGymPassComponent, NewPostFormComponent, PostDetailsComponent, PasswordChangerComponent, ProfileDataEditorComponent, AFAddDietComponent, AFChangeUserPasswordComponent, AFEditGymPassesComponent, AFEditPermissionsComponent, AFEditUserDataComponent, AFGymPassRequestsComponent } from '../../dialogs';

const AdminDialogMap: Record<string, Type<any>> = {
  gymPassRequests: AFGymPassRequestsComponent,
  newPostForm: NewPostFormComponent,
  orderGymPass: OrderGymPassComponent,
  postDetails: PostDetailsComponent,
  passwordChanger: PasswordChangerComponent,
  profileDataEditor: ProfileDataEditorComponent,
  addDiet: AFAddDietComponent,
  changeUserPassword: AFChangeUserPasswordComponent,
  editGymPasses: AFEditGymPassesComponent,
  editPermissions: AFEditPermissionsComponent,
  editUserData: AFEditUserDataComponent,
}


@Component({
  selector: 'af-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AFAdminPageComponent {
  private dialogService: DialogService = inject(DialogService);
  private profileService: ProfileService = inject(ProfileService);
  private message: AfMessageService = inject(AfMessageService);
  private ref: DynamicDialogRef;


  public openDialog(myComponent: string): void{ 
    const componentType = AdminDialogMap[myComponent];
    if (!componentType) {
      this.message.addErrorMessage("Błąd wczytania")
      return;
    }
   this.ref = this.dialogService.open(componentType,{
      ...dialogConfig,
      header: "Gym Pass Requests"
    })
    this.closeDialog();
  }

  private closeDialog(): void {
    this.ref.onClose.pipe(
      delay(1000),
      tap(() => {
        this.profileService.getUserData();
      })).subscribe((val) => {
        if (val) {
          this.message.addSuccesMessage("Wprowadzono zmiany");
        }
      })
  }
}
