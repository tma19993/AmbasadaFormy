import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { inputIconConfig } from 'src/app/shared/models/input.model';
import { EnumIconFloat } from '../../enums';

@Component({
  selector: 'af-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AFInputComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports:[
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule
  ]
})
export class AFInputComponent implements ControlValueAccessor {
  @Input() public floatLabelText: string = '';
  @Input() public placeholderText: string = '';
  @Input() public floatLabel: boolean = false;
  // @Input() public iconConfig: inputIconConfig | undefined;
  @Input() public iconClassName: string;
  @Input() public iconFloat: EnumIconFloat = EnumIconFloat.left;
  public value: string = "";

  public onChange = (value: string) => { };
  onTouched = () => { };

  public writeValue(value: string): void {
    this.value = value || '';
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }

}
