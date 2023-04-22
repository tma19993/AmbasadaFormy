import {  NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesModule } from 'primeng/messages';
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
  ],
})
export class AfMessagesModule { }
