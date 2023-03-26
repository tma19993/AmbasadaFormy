import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';
@Component({
  selector: 'af-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
@Input() public messages:Message[] = [];
@Input() public enableService: boolean = false;
@Input() public closable: boolean = false;
// to show how message component works
@Input() public showAdditionalButtons: boolean = false;

constructor(){

}
public addMessages(): void {
  this.messages = [{ severity: 'info', summary: 'Info', detail: 'Message Content' }]
}

public clearMessages(): void {
  this.messages = [];
}

}
