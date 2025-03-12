import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextareaSizeModel } from 'src/app/shared/models/inputtextarea.model';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-textarea',
  templateUrl: './inputtextarea.component.html',
  styleUrls: ['./inputtextarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AFInputTextareaComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [SharedModule, PrimengModule],
})
export class AFInputTextareaComponent implements ControlValueAccessor {
  @Input() public autoResize: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public floatLabelText: string = "";
  @Input() public placeholderText: string = "";
  @Input() public disabled: boolean = false;
  @Input() public size: InputTextareaSizeModel = {};

  public value: string = '';

  constructor() { }

  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.value = value || '';
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
