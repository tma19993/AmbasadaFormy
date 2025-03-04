import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { AFMenuStaticComponent } from '../shared/components/menu-static/menu-static.component';



@NgModule({
  declarations: [TrainersComponent],
  imports: [
    SharedModule,
    TrainersRoutingModule,
    AFTileComponent,
    AFMenuStaticComponent
  ],
  exports: [
    TrainersComponent
  ]
})
export class TrainersModule { }
