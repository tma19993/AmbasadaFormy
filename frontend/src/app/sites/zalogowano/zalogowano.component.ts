import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zalogowano',
  templateUrl: './zalogowano.component.html',
  styleUrls: ['./zalogowano.component.scss']
})
export class ZalogowanoComponent {
  constructor(private router: Router) { }
}
