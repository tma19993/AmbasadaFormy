import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonIconPosition } from 'src/stories/enums/button.enum';
@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() public label: string = '';
  @Input() public iconClassName: string = '';
  @Input() public iconPos: ButtonIconPosition = 'left';
  @Input() public fontSize: number = 20;
  @Input() public iconSize: number = 20;
  @Input() public buttonId: string = '';
  @Input() public disabled: boolean = false;
  @Input() public whiteButton: boolean = false;
  @Input() public transparentButton: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {
  }
  public ngAfterViewInit(): void {
    if(!!this.buttonId){
    setTimeout(()=>{
      this.changeFontsize();
      this.changeIconsize();
    },5);
    }
  }

  public click(): void {
    this.onClick.emit();
  }
  public changeFontsize():void {
   const element: HTMLElement= document.querySelector(`.${this.buttonId} p-button button.p-button span.p-button-label`) as HTMLElement;
   element.style.fontSize = this.fontSize + "px";
  };

  public changeIconsize():void {
    const element: HTMLElement= document.querySelector(`.${this.buttonId} p-button button.p-button span.p-button-icon`) as HTMLElement;
    element.style.fontSize = this.iconSize + "px";
  }
}
