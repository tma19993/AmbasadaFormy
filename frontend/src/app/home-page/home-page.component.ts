import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(
      sessionStorage.getItem('language') || 'en'
    );
  }

  public gymPassButton(): void {
    // this.router.navigate(['/gym-pass']);
  }

  public trainersButton(): void {
    this.router.navigate(['/trainers']);
  }

}
