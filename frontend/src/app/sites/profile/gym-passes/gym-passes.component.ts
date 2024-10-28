import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GymPassesService, ProfileService } from 'src/app/api';
import { GymPassModel, userDataModel } from 'src/app/features/models';

@Component({
  selector: 'app-gym-passes',
  templateUrl: './gym-passes.component.html',
  styleUrls: ['./gym-passes.component.scss']
})
export class GymPassesComponent {
  constructor(
    private profileService: ProfileService,
    private gymPassesService: GymPassesService
    ){}
  
    public ngOnInit(): void {
      this.getGymPasses();
    }

    public changeGymPass(): void {
      
    }

    private getGymPasses(): void{
      if(this.gymPassesService.gymPasses.length == 0){
        this.gymPassesService.getGymPasses();
      }
      
    }

    public get userData(): userDataModel {
      return this.profileService.userData;
    }

    public get gymPasses(): GymPassModel[]{
      return this.gymPassesService.gymPasses;
    }
  
}
