import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'af-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() public darkMode:boolean = false;
constructor(){}

}
