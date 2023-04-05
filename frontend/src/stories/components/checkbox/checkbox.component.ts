import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  
  @Input() public label: string = "";
  @Input() public disabled: boolean = false;
  @Input() public binary: boolean = false;
  public checked: boolean = false;
  constructor() {
  }

}
