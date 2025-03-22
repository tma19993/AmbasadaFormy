import { Component, inject, OnInit, Signal } from '@angular/core';
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
  private profileService: ProfileService = inject(ProfileService);
  private router: Router = inject(Router);
  private translate: TranslateService = inject(TranslateService);
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;



  public ngOnInit(): void {
    this.profileService.getUserData();
    this.translate.use(sessionStorage.getItem("language")!);
  }

  public undo(): void {
    this.router.navigate(['/home']);
  }

}
