import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-floatlabel',
  templateUrl: './iconShadow.component.html',
  styleUrls: ['./iconShadow.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AFIconShadowComponent {
  @Input() link: string = "#";
  @Input() iconClassName: string = "";
  constructor() { }
}
