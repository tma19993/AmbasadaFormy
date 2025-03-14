import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AFPasswordComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [SharedModule, PrimengModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AFPasswordComponent implements OnInit, ControlValueAccessor {
  @Input() public floatLabelText: string = '';
  @Input() public feedback: boolean = false;

  @Input() public disabledPassword: boolean = false;
  @Input() public maxLength: number = 255;
  @Output() public inputValue: EventEmitter<string> = new EventEmitter();


  public value: string;
  public showClear: boolean = false;
  public onChange = (value: any) => { };
  public onTouched = () => { };
  constructor() { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.addIconToPasswordInput();
      this.findIcon();
    }, 0);
  }

  public getValue(): void {
    this.inputValue.emit(this.value);
  }

  private findIcon(): void {
    document.querySelectorAll(".pi-eye")?.forEach(element => {
      element.classList.add("password__icon");
    });
  }

  private addIconToPasswordInput(): void {
    document.querySelectorAll("p-password .p-password")?.forEach(element => {
      const classList: string[] = ["pi", "pi-lock", "password__content--lock-icon"];
      const lockIcon: HTMLElement = document.createElement("i");
      if (element)
        lockIcon.classList.add(...classList);
      element.prepend(lockIcon)
    });
  }
}


