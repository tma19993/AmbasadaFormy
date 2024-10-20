import { Component, Input, Output } from '@angular/core';
import { Categories } from 'src/stories/interfaces/radiobutton.model';

@Component({
  selector: 'af-radioButtons',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadioButtonComponent {
  @Input() categories: Categories[] = [];
  @Input() disabled: boolean = false;
  @Input() selectedCategory: Categories | null = null;

  constructor() {}
}
