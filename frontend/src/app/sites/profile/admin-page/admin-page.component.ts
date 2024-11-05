import { Component, OnInit } from '@angular/core';
import { RequestsGymPassesService } from 'src/app/shared/services/api';
import { RequestModel } from 'src/app/features';

@Component({
  selector: 'af-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{

  constructor(private requestService: RequestsGymPassesService){
  }

  public ngOnInit(): void {
    this.requestService.getRequests();
  }
  public get requestsData(): RequestModel[]{
    return this.requestService.requestsData;
  }
}
