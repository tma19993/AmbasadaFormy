import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
