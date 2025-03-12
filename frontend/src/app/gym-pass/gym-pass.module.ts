import { NgModule } from '@angular/core';

import { GymPassRoutingModule } from './gym-pass-routing.module';
import { GymPassComponent } from './gym-pass.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AFMenuStaticComponent } from '../shared/components/menu-static/menu-static.component';
import { AFGymPassCardComponent, AFGymPassInfoComponent } from './components';



@NgModule({
  declarations: [GymPassComponent],
  imports: [
    SharedModule,
    GymPassRoutingModule,
    AFMenuStaticComponent,
    AFGymPassCardComponent,
    AFGymPassInfoComponent
  ],
  exports: [
    GymPassComponent
  ]
})
export class GymPassModule { }
