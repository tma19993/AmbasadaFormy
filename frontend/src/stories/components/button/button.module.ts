import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class AppButtonModule { }
