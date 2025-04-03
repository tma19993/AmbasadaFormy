import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent {
  constructor(private router: Router, private translateService: TranslateService) {
    sessionStorage.setItem('language', sessionStorage.getItem("language") || ("en"));
    this.translateService.setDefaultLang(sessionStorage.getItem("language")!);
  }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
