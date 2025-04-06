import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { delay, tap } from 'rxjs';
import { AfMessageService, ProfileService, RequestsGymPassesService } from 'src/app/core/services';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { RequestModel, TableHeaderModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditRequestsDialogComponent } from '../../dialogs/edit-requests-dialog/edit-requests-dialog.component';
import { DeleteRequestDialogComponent } from '../../dialogs/delete-request-dialog/delete-request-dialog.component';
import { dialogConfig } from 'src/app/shared/constants';

@Component({
  selector: 'af-requests-table',
  standalone: true,
  imports: [TableModule, SharedModule, AFButtonComponent],
  templateUrl: './requests-table.component.html',
  styleUrl: './requests-table.component.scss'
})
export class RequestsTableComponent {

  private datePipe: DatePipe = inject(DatePipe);
  private dialogService: DialogService = inject(DialogService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);
  private message: AfMessageService = inject(AfMessageService);
  @Output() public deleteRow: EventEmitter<any> = new EventEmitter;
  @Output() public editRow: EventEmitter<any> = new EventEmitter;
  @Input() public values: RequestModel[] = [];
  public firstPage: number = 0;
  public columns: TableHeaderModel[] = [
    { field: "requestDate", header: "Request Date" },
    { field: "userName", header: "User Name" },
    { field: "gymPassNameToActive", header: "Gym Pass To Active" },
    { field: "status", header: "Status" }
  ]
  private ref: DynamicDialogRef;

  public delete(event: RequestModel): void {
    this.openDialog(DeleteRequestDialogComponent, "Delete", event);
  }
  public edit(event: RequestModel): void {
    this.openDialog(EditRequestsDialogComponent, "Edit", event);
  }

  public formatIfDateString(value: any): string {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (typeof value === 'string' && isoDateRegex.test(value)) {
      const date = new Date(value);
      return this.datePipe.transform(date, 'dd-MM-yy HH:mm') || value;
    }
    return value;
  }

  private openDialog(myComponent: Type<any>, header: string, requestData: RequestModel): void {
    this.spinnerService.loadingActivation.set(false);
    this.ref = this.dialogService.open(myComponent, {
      ...dialogConfig,
      width: "20%",
      header: header,
      data: {
        ...requestData
      }
    })
    this.ref.onClose.pipe(
      delay(1000),
      tap(() => {
        this.requestService.getRequests();
      })).subscribe((val) => {
        if (val) {
          this.message.addSuccesMessage("Wprowadzono zmiany");
          this.spinnerService.loadingActivation.set(true);
        }
      })
  }

}

