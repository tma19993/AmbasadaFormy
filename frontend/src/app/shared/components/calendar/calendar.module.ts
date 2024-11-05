import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
  ],
})
export class AppCalendarModule { }
