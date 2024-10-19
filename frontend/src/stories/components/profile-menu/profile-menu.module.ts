import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AFProfileMenuComponent } from './profile-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { AFButtonModule } from '../button/button.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AFProfileMenuComponent
  ],
  exports: [
    AFProfileMenuComponent
  ],
  imports: [
    CommonModule,
    AFButtonModule,
    TranslateModule.forChild(),
    AppRoutingModule,
  ],
})
export class AFProfileMenuModule { }
