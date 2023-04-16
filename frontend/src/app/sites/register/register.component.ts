import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) { }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public goToWelcomePage(): void {
    this.router.navigate(['/home']);
  }
}
