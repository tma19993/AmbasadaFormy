import { Pipe, PipeTransform } from '@angular/core';
import { DietModel } from '../../models';
import { TrainingModel } from '../../models/training.model';

@Pipe({
  name: 'activeStatus',
  standalone: true,
})
export class ActiveStatusPipe implements PipeTransform {
  transform(value: DietModel[] | TrainingModel[]): DietModel | TrainingModel {
    let active: any[] = [];
    if (value) {
      active = value.filter((val) => val.active === true);
    }

    return active[0];
  }
}
