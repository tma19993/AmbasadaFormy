import { Component, inject, OnInit } from '@angular/core';
import { RequestsGymPassesService } from 'src/app/core/services';
import { RequestModel } from 'src/app/shared/models';


@Component({
  selector: 'af-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AFAdminPageComponent implements OnInit{
  private requestService: RequestsGymPassesService = inject(RequestsGymPassesService)

  public ngOnInit(): void {
    this.requestService.getRequests();
  }
  public get requestsData(): RequestModel[]{
    return this.requestService.requestsData;
  }
}
