import { AfterViewInit, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements AfterViewInit, DoCheck {
  @Input() public floatLabelText: string = '';
  @Input() public weakLabel: string = '';
  @Input() public mediumLabel: string = '';
  @Input() public strongLabel: string = '';
  @Input() public toggleMask: boolean = false;
  @Input() public feedback: boolean = false;
  @Input() public floatLabel: boolean = false;
  @Input() public disabledPassword: boolean = false;
  @Input() public maxLength: number = 255;

  public value: string | undefined;
  public showClear: boolean = false;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.addIconToPasswordInput();
    this.findIcon();
  }

  public ngDoCheck(): void {
    this.showClearButton();
  }

  private showClearButton(): void {
    this.value?.length ? (this.showClear = true) : (this.showClear = false);
  }

  private findIcon():void{
    
    document.querySelector(".pi-eye")?.classList.add("password__icon");
   
  }

  private addIconToPasswordInput():void{
    const classList: string[] = ["pi", "pi-lock", "password__content--lock-icon"];
    const lockIcon:HTMLElement = document.createElement("i");
    lockIcon.classList.add(...classList);
    document.querySelector(".p-password")?.prepend(lockIcon);
  }
}
