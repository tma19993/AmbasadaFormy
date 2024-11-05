import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/api';
import { userDataModel } from 'src/app/features';

@Component({
  selector: 'app-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.scss']
})
export class PersonalTrainerComponent {

constructor(private profileService: ProfileService){}

  public get userData(): userDataModel {
    return this.profileService.userData;
  }
}
