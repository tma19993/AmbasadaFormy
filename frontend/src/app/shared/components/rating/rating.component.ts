import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'af-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    FormsModule
  ],
})
export class RatingComponent {
@Input() public label: string = "";
@Input() public disable: boolean = false;
@Input() public readonly: boolean = false;
@Input() public cancel: boolean = false;
@Input() public stars: number = 5;
public val: number = 0;
ss: any;
constructor(){

}
}
