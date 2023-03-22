import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [PasswordComponent],
  exports: [PasswordComponent],
  imports: [CommonModule, PasswordModule],
})
export class AppPasswordModule {}
