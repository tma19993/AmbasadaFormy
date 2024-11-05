import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [PasswordComponent],
  exports: [PasswordComponent],
  imports: [CommonModule, PasswordModule, FormsModule,DividerModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class AfPasswordModule {}
