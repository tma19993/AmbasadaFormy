import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class AFFooterComponent {
constructor(private translateService: TranslateService){
  this.translateService.setDefaultLang(sessionStorage.getItem("language") || ("en"));
}

}
