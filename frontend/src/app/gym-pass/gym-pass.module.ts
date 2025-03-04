import { NgModule } from '@angular/core';

import { GymPassRoutingModule } from './gym-pass-routing.module';
import { GymPassComponent } from './gym-pass.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AFMenuStaticComponent } from '../shared/components/menu-static/menu-static.component';
import { AFGymPassCardComponent } from '../shared/components/gym-pass/gym-pass-card/gym-pass-card.component';
import { AFGymPassInfoComponent } from '../shared/components/gym-pass/gym-pass-info/gym-pass-info.component';


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
