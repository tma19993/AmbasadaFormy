import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { AfMessageService, LoginService, ProfileService } from 'src/app/services';

@Component({
  selector: 'af-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public userData$: Observable<userDataModel>;

  constructor(
    private loginService: LoginService,
    private profileService: ProfileService
  ) {
    this.userData$ = this.profileService.getUserData();
  }

  public logout(): void {
    this.loginService.logout();
  }

  public removeUser(): void {
    this.profileService.removeUser().subscribe(()=>{
        setTimeout(()=>{
      this.logout();
    },2000)
    });
  
  }
}
