import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
@Input() public text: string = "";

constructor(){}
}
