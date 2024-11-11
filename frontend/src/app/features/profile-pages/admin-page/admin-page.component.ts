import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { RequestsGymPassesService } from 'src/app/core/services';
import { RequestModel, TableHeaderModel } from 'src/app/shared/models';


@Component({
  selector: 'af-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AFAdminPageComponent implements OnInit{
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService);
  private datePipe: DatePipe = inject(DatePipe);

  public columns:TableHeaderModel[]  = [
      { field: "requestDate", header: "Request Date" },
      { field: "userName", header: "User Name" },
      { field: "gymPassNameToActive", header: "Gym Pass To Active" },
      { field: "status", header: "Status" }    
  ]

  public ngOnInit(): void {
    this.requestService.getRequests();
  }
  
  public get requestsData(): RequestModel[] {
    return this.requestService.requestsSignal()
  }

  public deleteRow(event: RequestModel):void{
    console.log(event);
  }
  public editRow(event: RequestModel):void{
    console.log(event);
  }
}
