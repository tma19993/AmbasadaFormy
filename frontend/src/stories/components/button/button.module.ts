import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
  ],
})
export class AFButtonModule { }
