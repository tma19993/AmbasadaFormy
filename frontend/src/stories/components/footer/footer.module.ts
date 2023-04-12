import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AppButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppButtonModule
  ],
})
export class FooterModule { }
