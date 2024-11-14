import { Component, inject, Signal } from '@angular/core';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class AFDietsComponent {
  private profileSerivce: ProfileService = inject(ProfileService);
  public userData: Signal<userDataModel> = this.profileSerivce.userDataSignal;

}
