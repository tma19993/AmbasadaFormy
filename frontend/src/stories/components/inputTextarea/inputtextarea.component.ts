import { Component, Input } from '@angular/core';
import { InputTextareaSizeModel } from 'src/stories/interfaces/inputtextarea.model';

@Component({
  selector: 'af-inputTextarea',
  templateUrl: './inputtextarea.component.html',
  styleUrls: ['./inputtextarea.component.scss'],
})
export class InputTextareaComponent {
  @Input() public autoResize: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public floatLabelText: string = "";
  @Input() public disabled: boolean = false;
  @Input() public size: InputTextareaSizeModel = {};

  public value: string = '';

  constructor() {}
}
