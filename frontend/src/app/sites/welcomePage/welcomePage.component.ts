import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomePage',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.scss']
})
export class WelcomePageComponent {
  constructor(private router: Router) { }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
