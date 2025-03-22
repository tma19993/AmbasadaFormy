import { Pipe, PipeTransform } from '@angular/core';
import { TrainingModel } from '../../models/training.model';

@Pipe({
  name: 'trainingStatus',
  standalone: true
})
export class TrainingStatusPipe implements PipeTransform {

  transform(diets: TrainingModel[], status: 'forDelete' | 'active'): boolean {
    return !diets.some(diet => diet[status] === true);
  }


}
