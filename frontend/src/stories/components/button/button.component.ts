import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonIconPosition } from 'src/stories/enums/button.enum';
@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public label: string = '';
  @Input() public iconClassName: string = '';
  @Input() public iconPos: ButtonIconPosition = `left` ;
  @Input() public loading: boolean = false;
  @Input() public styleClass: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  click() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.onClick.emit();
    }, 500);
  }


  
constructor(){

}
}
