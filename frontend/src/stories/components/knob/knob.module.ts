import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobComponent } from './knob.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [KnobComponent],
  imports: [CommonModule, KnobModule, FormsModule],
  exports: [KnobComponent],
})
export class AFKnobModule {}
