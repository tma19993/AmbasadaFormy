import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ButtonIconPosition } from 'src/stories/enums/button.enum';
@Component({
  selector: 'af-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ButtonModule,
    FormsModule,
  ]
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
