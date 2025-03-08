import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort',
  standalone: true
})
export class DateSortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
