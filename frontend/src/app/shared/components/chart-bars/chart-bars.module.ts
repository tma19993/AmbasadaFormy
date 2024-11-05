import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ChartBarsComponent } from './chart-bars.component';

@NgModule({
  declarations: [
    ChartBarsComponent
  ],
  exports: [
    ChartBarsComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
  ],
})
export class ChartBarsModule { }
