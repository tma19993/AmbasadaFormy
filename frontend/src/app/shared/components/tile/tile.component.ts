import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'af-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AFTileComponent {
  @Input() public darkMode: boolean = false;
  @Input() public disabled: boolean = false;
  constructor() { }

}
