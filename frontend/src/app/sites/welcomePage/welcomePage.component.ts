import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcomePage',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.scss']
})
export class WelcomePageComponent {
  constructor(private router: Router, private translateService: TranslateService) {
    this.translateService.setDefaultLang(localStorage.getItem("language") || ("en"));
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
    // window.location.href = 'http://keycloak:8080'
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
