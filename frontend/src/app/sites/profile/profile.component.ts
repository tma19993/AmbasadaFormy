import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { ProfileService } from 'src/app/api';

@Component({
  selector: 'af-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userData$: Observable<userDataModel>;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private translate: TranslateService) {
    this.userData$ = this.profileService.getUserData();
  }

  public ngOnInit(): void {
    this.translate.use(sessionStorage.getItem("language")!);
  }
  
  public undo(): void {
    this.router.navigate(['/home']);
  }
}
