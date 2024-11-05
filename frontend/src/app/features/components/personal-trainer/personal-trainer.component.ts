import { Component, inject } from '@angular/core';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';


@Component({
  selector: 'app-personal-trainer',
  templateUrl: './personal-trainer.component.html',
  styleUrls: ['./personal-trainer.component.scss']
})
export class PersonalTrainerComponent {
  private profileService: ProfileService = inject(ProfileService)


  public get userData(): userDataModel {
    return this.profileService.userData;
  }
}
