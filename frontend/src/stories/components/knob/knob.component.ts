import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floatlabel',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class KnobComponent {
  @Input() public value: number = 0;
  @Input() public minValue: number = 0;
  @Input() public maxValue: number = 0;
  @Input() public size: number = 0;
  @Input() public valueColor: string = '';
  @Input() public rangeColor: string = '';
  constructor() {}
}
