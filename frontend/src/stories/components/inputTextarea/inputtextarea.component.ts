import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputTextareaSizeModel } from 'src/stories/interfaces/inputtextarea.model';

@Component({
  selector: 'af-inputTextarea',
  templateUrl: './inputtextarea.component.html',
  styleUrls: ['./inputtextarea.component.scss'],
})
export class InputTextareaComponent implements ControlValueAccessor {
  @Input() public autoResize: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public floatLabelText: string = "";
  @Input() public labelText: string = "";
  @Input() public disabled: boolean = false;
  @Input() public size: InputTextareaSizeModel = {};

  public value: string = '';

  constructor() {}

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}
