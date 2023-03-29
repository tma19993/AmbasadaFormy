import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AFTableComponent } from './table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AFTableComponent
  ],
  exports: [
    AFTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule
  ],
})
export class AFTableModule { }
