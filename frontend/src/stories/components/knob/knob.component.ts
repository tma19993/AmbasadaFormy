import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class KnobComponent {
  @Input() public value: number = 0;
  @Input() public minValue: number = 0;
  @Input() public maxValue: number = 0;
  @Input() public size: number = 0;
  @Input() public readonly:boolean = false;
  @Input() public disabled:boolean = false;
  constructor() {}
}
