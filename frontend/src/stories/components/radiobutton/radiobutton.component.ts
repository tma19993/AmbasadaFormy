import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floatlabel',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadioButtonComponent {
  @Input() public value: number = 0;
  @Input() public minValue: number = 0;
  @Input() public maxValue: number = 0;
  @Input() public size: number = 0;
  @Input() public valueColor: string = '';
  @Input() public rangeColor: string = '';
  constructor() {}
}
