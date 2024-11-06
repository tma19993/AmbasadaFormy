import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'af-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports:[
    FormsModule,
    CheckboxModule,
  ]
})
export class AFCheckboxComponent {

  
  @Input() public label: string = "";
  @Input() public disabled: boolean = false;
  @Input() public checked: boolean = false;
  @Output() public checkedToggler: EventEmitter<boolean> = new EventEmitter();
  
  constructor() {
  }

  public checkedTogglerEmiter():void{
    this.checkedToggler.emit(this.checked);
  }
}
