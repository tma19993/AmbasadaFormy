import { AfterViewInit, Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'af-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements AfterViewInit {
  @Input() public floatLabelText: string = '';
  @Input() public weakLabel: string = '';
  @Input() public mediumLabel: string = '';
  @Input() public strongLabel: string = '';
  @Input() public feedback: boolean = false;
  
  @Input() public disabledPassword: boolean = false;
  @Input() public maxLength: number = 255;
  @Output() public inputValue:EventEmitter<string>= new EventEmitter();


  public value: string | undefined;
  public showClear: boolean = false;
  public floatLabel: boolean = false;
  constructor() {
    if(this.floatLabelText.length !=0){
      this.floatLabel = true;
    }
  }

  public getValue():void{
    this.inputValue.emit(this.value);
  }

  public ngAfterViewInit(): void {
    this.addIconToPasswordInput();
    this.findIcon();
  }

  private findIcon():void{
    document.querySelectorAll(".pi-eye")?.forEach(element=>{
      element.classList.add("password__icon");
    });
  }

  private addIconToPasswordInput():void{
    document.querySelectorAll(".p-password")?.forEach(element => {
      const classList: string[] = ["pi", "pi-lock", "password__content--lock-icon"];
      const lockIcon:HTMLElement = document.createElement("i");
    lockIcon.classList.add(...classList);
      element.prepend(lockIcon)
    });
  }
}


