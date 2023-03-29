import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
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
