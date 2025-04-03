import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainersService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainersComponent {
  public trainers$: Observable<userDataModel[]> = inject(TrainersService).getTrainers();
}
