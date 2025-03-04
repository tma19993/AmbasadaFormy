import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule],
})
export class AFCheckboxComponent {


  @Input() public label: string = "";
  @Input() public disabled: boolean = false;
  @Input() public checked: boolean = false;
  @Output() public checkedToggler: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  public checkedTogglerEmiter(): void {
    this.checkedToggler.emit(this.checked);
  }
}
