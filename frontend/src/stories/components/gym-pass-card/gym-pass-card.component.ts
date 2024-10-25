import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-gym-pass-card',
  templateUrl: "./gym-pass-card.component.html",
  styleUrls: ['./gym-pass-card.component.scss'],
})
export class AFGymPassCardComponent  {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() price: string;
  @Input() options: string[];
  @Input() buttonId: string;
  constructor() {}
}
