import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'af-menuStatic',
  templateUrl: './menuStatic.component.html',
  styleUrls: ['./menuStatic.component.scss']
})
export class MenuStaticComponent {
constructor(private translateService: TranslateService){
  this.translateService.setDefaultLang(localStorage.getItem("language") || ("en"));
}

public changeLanguage(id:string):void{
    localStorage.setItem("language", id);
    setTimeout(()=>{
      window.location.reload();
    },100);
    }
}
