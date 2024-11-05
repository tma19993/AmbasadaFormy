import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, AvatarModule, FormsModule],
  exports: [AvatarComponent],
})
export class AFAvatarModule {}
