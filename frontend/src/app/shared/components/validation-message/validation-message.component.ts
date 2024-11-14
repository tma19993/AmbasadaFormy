import { Component } from '@angular/core';
import { AFMessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'af-validation-message',
  standalone: true,
  imports: [AFMessagesComponent],
  template: `
  <div class="validoation__container">
    <af-messages [closable]="true"></af-messages>
  </div>
`,
  styles: [`
  .validoation__container {
    position: fixed;
    top: 50px;
    right:20px;
    z-index: 10001;
    }
    `]
})
export class AFValidationMessageComponent {

}
