import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    ButtonModule
  ],
})
export class AfMessagesModule { }
