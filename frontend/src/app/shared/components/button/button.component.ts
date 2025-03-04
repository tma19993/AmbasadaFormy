import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonIconPosition } from 'src/app/shared/enums/button.enum';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { SharedModule } from '../../shared.module';
@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule]
})
export class AFButtonComponent {
  @Input() public label: string = '';
  @Input() public type: string = "button";
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
  public click(): void {
    this.onClick.emit();
  }

}
