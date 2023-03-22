import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `,
  ],
})
export class PasswordComponent {
  @Input() public label: string = '';
  constructor() {}
}
