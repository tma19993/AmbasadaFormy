import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { AFButtonComponent } from 'src/app/shared/components/button/button.component';
import { AFLanguageChangerComponent } from '../shared/components/language-changer/language-changer.component';



@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    SharedModule,
    WelcomePageRoutingModule,
    AFTileComponent,
    AFButtonComponent,
    AFLanguageChangerComponent,
  ]
})
export class WelcomePageModule { }
