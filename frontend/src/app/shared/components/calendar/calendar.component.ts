import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'af-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    CalendarModule,
    FormsModule,
  ]
})
export class CalendarComponent {
  @Input() public date: Date | undefined;
  @Input() public showIcon: boolean = false;
  @Input() public showButtonBar: boolean = false;
  @Input() public readonlyInput: boolean = false;
  @Input() public showTime: boolean = false;
  @Input() public showSeconds: boolean = false;
  constructor(){}
}
