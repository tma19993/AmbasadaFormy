import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstThreeSentence',
  standalone: true
})
export class FirstThreeSentencePipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return "";
    if (!value.includes('.')) return value;
    const sentences = value.match(/[^.!?]+[.!?]/g) || [];
    return sentences.slice(0, 3).join(" ");
  }

}
