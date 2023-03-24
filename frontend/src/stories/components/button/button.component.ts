import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public label: string = '';
  @Input() public iconClassName: string = '';
  @Input() public iconPos: string = '';
  @Input() public loading: boolean = false;
  @Input() public styleClass: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.onClick.emit();
    }, 500);
  }


  
constructor(){

}
}
