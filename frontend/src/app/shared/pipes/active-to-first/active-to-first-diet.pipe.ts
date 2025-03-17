import { Pipe, PipeTransform } from '@angular/core';
import { DietModel } from '../../models';
import { TrainingModel } from '../../models/training.model';

@Pipe({
  name: 'activeToFirstDiet',
  standalone: true
})
export class ActiveToFirstDietPipe implements PipeTransform {
  transform(items: DietModel[]): DietModel[] {
    if (!items || items.length === 0) {
      return items;
    }
    const activeItem = items.find(item => item.active);

    if (activeItem) {
      const newItems = items.filter(item => item !== activeItem);

      newItems.unshift(activeItem);
    }

    return items;
  }
}