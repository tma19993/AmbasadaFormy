import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingComponent
  ],
  exports: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule
  ],
})
export class AFRatingModule { }
