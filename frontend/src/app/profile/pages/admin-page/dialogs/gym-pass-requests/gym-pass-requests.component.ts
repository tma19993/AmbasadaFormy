import { Component, inject, OnInit, Signal } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RequestsGymPassesService } from 'src/app/core/services';
import { RequestModel, TableHeaderModel } from 'src/app/shared/models';

@Component({
  selector: 'af-gym-pass-requests',
  templateUrl: './gym-pass-requests.component.html',
  styleUrl: './gym-pass-requests.component.scss'
})
export class AFGymPassRequestsComponent implements OnInit {

  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);

  public requestsData: Signal<RequestModel[]> = this.requestService.requestsSignal;

  public ngOnInit(): void {
    this.requestService.getRequests();
  }

}

// treść tego przyda się do admin-page do aktywowania karnetu
// const { _id, name } = this.config.data.gymPassData as GymPassModel
// const userDataForUpdate: userDataModel = {
//   activeGymPass: true,
//   gympassId: _id,
//   gympassName: name
// };
// this.profileSerivce.updateUserData(userDataForUpdate).subscribe();
// this.dialogRef.close(userDataForUpdate);
