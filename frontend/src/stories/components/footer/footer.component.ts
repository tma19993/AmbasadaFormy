import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(private translateService: TranslateService){
  this.translateService.setDefaultLang(localStorage.getItem("language") || ("en"));
}

}
