import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';
@Component({
  selector: 'af-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
@Input() public messages:Message[] = [];
@Input() public closable: boolean = false;


constructor(){

}
}
