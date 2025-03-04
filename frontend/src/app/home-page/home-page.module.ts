import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AFMenuStaticComponent } from '../shared/components/menu-static/menu-static.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule,
    AFButtonComponent,
    AFTileComponent,
    AFMenuStaticComponent,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
