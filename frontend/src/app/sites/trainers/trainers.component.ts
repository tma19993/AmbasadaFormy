import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { LoginService, TrainersService } from 'src/app/services';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  public trainers$: Observable<userDataModel[]>;
  constructor( private loginService: LoginService, private trainersService: TrainersService){
    this.trainers$ = this.trainersService.getTrainers();
  }
  
  public logout(): void {
    this.loginService.logout();
  }

}
