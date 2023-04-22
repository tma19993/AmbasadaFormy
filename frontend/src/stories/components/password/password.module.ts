import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [PasswordComponent],
  exports: [PasswordComponent],
  imports: [CommonModule, PasswordModule, FormsModule,DividerModule],
})
export class AfPasswordModule {}
