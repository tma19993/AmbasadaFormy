import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    InputComponent
  ]
})

export class InputModule { }
