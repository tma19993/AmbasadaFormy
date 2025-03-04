import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class AFFooterComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(sessionStorage.getItem("language") || ("en"));
  }

}
