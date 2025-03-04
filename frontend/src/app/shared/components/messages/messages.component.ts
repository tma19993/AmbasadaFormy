import { Component, Input } from '@angular/core';
import { Message, SharedModule } from 'primeng/api';
import { PrimengModule } from '../../modules/primeng/primeng.module';
@Component({
  selector: 'af-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule],
})
export class AFMessagesComponent {
  @Input() public messages: Message[] = [];
  @Input() public closable: boolean = false;


  constructor() {

  }
}
