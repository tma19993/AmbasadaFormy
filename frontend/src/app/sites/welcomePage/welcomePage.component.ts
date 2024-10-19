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
    sessionStorage.setItem('language',sessionStorage.getItem("language") || ("en"));
    this.translateService.setDefaultLang(sessionStorage.getItem("language")!);
  }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
