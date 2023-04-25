import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  public languages: any[] =[
    {
      id:"pl",
      name: "polski"
    },
    {
      id:"en",
      name: "angielski"
    },
  ];
  public selectedLanguage: string;
  constructor(private router: Router,  private translateService: TranslateService) { 
    this.translateService.setDefaultLang(localStorage.getItem("language")!);
    this.selectedLanguage = localStorage.getItem("language")!;
  }


  public reload(event: any):void{
    localStorage.setItem("language", this.selectedLanguage);
    console.log(localStorage.getItem("language"));
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
}
