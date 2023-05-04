import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  constructor( private router: Router, private translateService: TranslateService){
    this.translateService.setDefaultLang(localStorage.getItem("language") || ("en"));
  }

  public gymPassButton():void{
    console.log("ładuję podstronę karnety");
    // this.router.navigate(['/gymPass']);
  }

  public trainersButton():void {
    console.log("ładuję podstronę Trenerzy");
    // this.router.navigate(['/treners']);
    }
}
