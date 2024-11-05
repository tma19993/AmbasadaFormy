import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floatlabel',
  templateUrl: './iconShadow.component.html',
  styleUrls: ['./iconShadow.component.scss'],
})
export class AFIconShadowComponent  {
@Input() link:string = "#";
@Input() iconClassName:string = "";
  constructor() {}
}
