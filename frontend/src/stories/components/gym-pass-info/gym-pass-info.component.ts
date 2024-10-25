import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-gym-pass-info',
  templateUrl: './gym-pass-info.component.html',
  styleUrls: ['./gym-pass-info.component.scss']
})
export class GymPassInfoComponent {
  @Input() title: string;
@Input() label1: string;
@Input() label2: string;
@Input() price: number;
@Input() buttonId: string;
}
