import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { TrainersService } from 'src/app/api';

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
