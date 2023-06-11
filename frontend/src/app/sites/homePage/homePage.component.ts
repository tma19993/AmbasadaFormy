import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  constructor( private router: Router, private translateService: TranslateService, private loginServ: LoginService){
    this.translateService.setDefaultLang(localStorage.getItem("language") || ("en"));

    if(!this.loginServ.getLoggedUserId()){
      // this.router.navigate(['/welcome']);
    }
  }

  public gymPassButton():void{
    this.router.navigate(['/gym-pass']);
  }

  public trainersButton():void {
    this.router.navigate(['/treners']);
    }
}
