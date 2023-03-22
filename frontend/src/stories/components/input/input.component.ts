import { Component, Input } from '@angular/core';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'af-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() public floatLabelText: string = '';
  @Input() public floatLabel: boolean = false;
  @Input() public iconConfig: inputIconConfig | undefined;

  public property: string = '';

  constructor() {}
}
