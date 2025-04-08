import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EnumIconFloat } from '../../enums';

import { PrimengModule } from '../../modules/primeng/primeng.module';
import { SharedModule } from '../../shared.module';
import { FloatLabelModule } from 'primeng/floatlabel';

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
  imports: [SharedModule, PrimengModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AFInputComponent implements ControlValueAccessor {
  @Input() public floatLabelText: string = '';
  @Input() public placeholderText: string = '';
  @Input() public floatLabel: boolean = false;
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
