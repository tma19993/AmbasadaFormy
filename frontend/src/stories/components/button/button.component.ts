import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonIconPosition } from 'src/stories/enums/button.enum';
@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit, OnInit {
  @Input() public label: string = '';
  @Input() public iconClassName: string = '';
  @Input() public iconPos: ButtonIconPosition = 'left';
  @Input() public fontSize: number = 20;
  @Input() public iconSize: number = 20;
  @Input() public disabled: boolean = false;
  @Input() public transparentButton: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {
  }
  public ngOnInit(): void {
    this.label = this.label.toUpperCase(); 
  }
  public ngAfterViewInit(): void {
      this.changeFontsize();
      this.changeIconsize();
  }
  public click(): void {
    this.onClick.emit();
  }
  private changeFontsize():void {
   const element: HTMLElement = (document.querySelector(".p-button-label")) as HTMLElement;
   element!.style.fontSize = this.fontSize + "px";
  }
  private changeIconsize():void {
   const element: HTMLElement = (document.querySelector(".p-button-icon")) as HTMLElement;
   element!.style.fontSize = this.iconSize + "px";
  }
}
