import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GymPassesService } from 'src/app/core/services';
import { GymPassModel } from 'src/app/shared/models';

@Component({
  selector: 'app-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss']
})
export class GymPassComponent  {
  constructor(private gymPassesService:GymPassesService,  private router: Router){
    this.gymPassesService.getGymPasses();
  }
  
  public get gymPasses(): GymPassModel[]{
    return this.gymPassesService.gymPasses
  }

}
