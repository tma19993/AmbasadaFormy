import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'af-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  
  @Input() public label: string = "";
  @Input() public disabled: boolean = false;
  @Output() public checkedToggler: EventEmitter<boolean> = new EventEmitter();
  public checked: boolean = false;
  constructor() {
  }

  public checkedTogglerEmiter():void{
    this.checkedToggler.emit(this.checked);
  }
}
