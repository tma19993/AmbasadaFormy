import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(
      sessionStorage.getItem('language') || 'en'
    );
  }

  public ngAfterViewInit(): void {
    let scrolled = false;
    this.route.fragment.subscribe(fragment => {
      if (fragment && !scrolled) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            scrolled = true;
          }
        }, 300)
      }
    })
  }

  public gymPassButton(): void {
    // this.router.navigate(['/gym-pass']);
  }

  public trainersButton(): void {
    this.router.navigate(['/trainers']);
  }

}
