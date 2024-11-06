import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'af-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    MessagesModule,
  ]
})
export class AFMessagesComponent {
@Input() public messages:Message[] = [];
@Input() public closable: boolean = false;


constructor(){

}
}
