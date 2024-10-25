import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GymPassesService } from 'src/app/api';
import { GymPassModel } from 'src/app/models';

@Component({
  selector: 'app-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss']
})
export class GymPassComponent  {

  public gymPasses$: Observable<GymPassModel[]>
  constructor(private gymPassesService:GymPassesService){
    this.gymPasses$ = this.gymPassesService.getGymPasses();
  }

  
public getOptions(name: string): string[] {
  switch (name) {
    case 'development':
      return ['gymPass.developmentPass.access', 'gymPass.developmentPass.monthlyPay', 'gymPass.shared.FirstPay', 'gymPass.shared.Water'];
    case 'fun':
      return ['gymPass.shared.Unlimited', 'gymPass.funPass.access', 'gymPass.shared.guarantee', 'gymPass.funPassFirstPay', 'gymPass.shared.freeze', 'gymPass.shared.cancel', 'gymPass.shared.Water'];
    case 'health':
      return ['gymPass.shared.Unlimited', 'gymPass.healthPass.allday', 'gymPass.shared.guarantee', 'gymPass.healthPass.Lackfirstpay', 'gymPass.healthPass.freetraining', 'gymPass.shared.freeze', 'gymPass.shared.cancel', 'gymPass.shared.Water'];
    default:
      return [];
  }
}


}
