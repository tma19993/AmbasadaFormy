import { Component, Input } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule]
})
export class AFKnobComponent {
  @Input() public value: number = 0;
  @Input() public minValue: number = 0;
  @Input() public maxValue: number = 0;
  @Input() public size: number = 0;
  @Input() public label: string;
  @Input() public readonly: boolean = false;
  @Input() public disabled: boolean = false;
  constructor() { }
}
