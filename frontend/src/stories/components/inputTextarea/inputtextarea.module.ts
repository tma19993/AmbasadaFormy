import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaComponent } from './inputtextarea.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputTextareaComponent
  ],
  exports: [
    InputTextareaComponent
  ],
  imports: [
    CommonModule,
    InputTextareaModule,
    FormsModule
  ],
})
export class AfInputTextareaModule { }
