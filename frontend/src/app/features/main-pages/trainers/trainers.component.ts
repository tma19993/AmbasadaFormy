import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainersService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  public trainers$: Observable<userDataModel[]>;
  constructor( private trainersService: TrainersService){
    this.trainers$ = this.trainersService.getTrainers();
  }

}
