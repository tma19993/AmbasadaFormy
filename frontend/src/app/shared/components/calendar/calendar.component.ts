import { Component, Input } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule]

})
export class CalendarComponent {
  @Input() public date: Date | undefined;
  @Input() public showIcon: boolean = false;
  @Input() public showButtonBar: boolean = false;
  @Input() public readonlyInput: boolean = false;
  @Input() public showTime: boolean = false;
  @Input() public showSeconds: boolean = false;
  constructor() { }
}
