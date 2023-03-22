import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radiobutton.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [CommonModule, RadioButtonModule, FormsModule],
  exports: [RadioButtonComponent],
})
export class AFRadiobuttonModule {}
