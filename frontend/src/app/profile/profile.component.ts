import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from 'src/app/core/services';
import { userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private translate: TranslateService) {
  }

  public ngOnInit(): void {
    this.profileService.getUserData();
    this.translate.use(sessionStorage.getItem("language")!);
  }
  
  public undo(): void {
    this.router.navigate(['/home']);
  }

  public get userData(): userDataModel {
    return this.profileService.userData;
  }
}
