import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { LoginService, ProfileService } from 'src/app/services';

@Component({
  selector: 'af-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userData$: Observable<userDataModel>;

  constructor(
    private loginService: LoginService,
    private profileService: ProfileService,
    private router: Router,
    private translate: TranslateService) {
    this.userData$ = this.profileService.getUserData();
  }

  public ngOnInit(): void {
    this.translate.use(sessionStorage.getItem("language")!);
  }
  
  public logout(): void {
    this.loginService.logout();
  }

  public undo(): void {
    this.router.navigate(['/home']);
  }
}
