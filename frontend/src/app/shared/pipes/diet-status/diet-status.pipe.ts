import { Pipe, PipeTransform } from '@angular/core';
import { DietModel } from '../../models';

@Pipe({
  name: 'dietStatus',
  standalone: true
})
export class DietStatusPipe implements PipeTransform {

  transform(diets: DietModel[], status: 'forDelete' | 'active'): boolean {
    return !diets.some(diet => diet[status] === true);
  }

}
