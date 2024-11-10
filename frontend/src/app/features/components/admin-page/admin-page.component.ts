import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
  
  public mappedData(): RequestModel[]{
  return this.requestsData.map(data=>{
  return {
    userName: data.userName,
    gymPassNameToActive: data.gymPassNameToActive,
    requestDate: this.datePipe.transform(data.requestDate,'yyyy-MM-dd')!,
    status: data.status
  }
})
  }

  public get requestsData(): RequestModel[]{
    return this.requestService.requestsData;
  }
}
