import { ChangeDetectionStrategy, Component, inject, OnInit, Type, WritableSignal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, DashboardService, ProfileService } from 'src/app/core/services';
import { dialogConfig } from 'src/app/shared/constants';
import { delay, tap } from 'rxjs';

import { AFChangeUserPasswordComponent, AFEditGymPassesComponent, AFEditPermissionsComponent, AFEditUserDataComponent, AFGymPassRequestsComponent, AFEditBlogComponent } from './dialogs';
import { DashboardModel, LastTimeKeys } from 'src/app/shared/models';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

const AdminDialogMap: Record<string, Type<any>> = {
  gymPassRequests: AFGymPassRequestsComponent,
  editBlog: AFEditBlogComponent,
  changeUserPassword: AFChangeUserPasswordComponent,
  editGymPasses: AFEditGymPassesComponent,
  editPermissions: AFEditPermissionsComponent,
  editUserData: AFEditUserDataComponent,
}

type SelectModel = { name: string, code: LastTimeKeys }
@Component({
  selector: 'af-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AFAdminPageComponent implements OnInit {

  private dialogService: DialogService = inject(DialogService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  private profileService: ProfileService = inject(ProfileService);
  private message: AfMessageService = inject(AfMessageService);
  private dashboardService: DashboardService = inject(DashboardService);
  private ref: DynamicDialogRef;

  public dashboardSignal: WritableSignal<DashboardModel> = this.dashboardService.dashboardSignal;
  public timeOptions: SelectModel[] = [
    { name: "1h", code: "lastHour" },
    { name: "24h", code: "last24Hours" },
    { name: "7d", code: "last7Days" },
  ]
  public selectedTime: SelectModel = { name: "24h", code: "last24Hours" };

  public ngOnInit(): void {
    this.dashboardService.getDashboardData();
  }


  public openDialog(myComponent: string, header: string): void {
    this.spinnerService.loadingActivation.set(false);
    const componentType = AdminDialogMap[myComponent];
    if (!componentType) {
      this.message.addErrorMessage("Błąd wczytania")
      return;
    }
    this.ref = this.dialogService.open(componentType, {
      ...dialogConfig,
      header: header
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
          this.spinnerService.loadingActivation.set(true);
        }
      })
  }
}
