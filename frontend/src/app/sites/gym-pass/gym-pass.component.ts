import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GymPassesService } from 'src/app/api';
import { GymPassModel } from 'src/app/features/models';

@Component({
  selector: 'app-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss']
})
export class GymPassComponent  {
  constructor(private gymPassesService:GymPassesService){
    this.gymPassesService.getGymPasses();
  }

  public get gymPasses(): GymPassModel[]{
    return this.gymPassesService.gymPasses
  }

}
