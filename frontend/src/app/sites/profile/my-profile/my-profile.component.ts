import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDataModel } from 'src/app/features/models';
import { ProfileService } from 'src/app/api';
@Component({
  selector: 'app-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  constructor(
    private router: Router,
    private profileService: ProfileService,
  ) {}


  public removeUser(): void {
    this.profileService.removeUser().subscribe(() => {
      setTimeout(() => {
        sessionStorage.clear();
        this.router.navigate(['/welcome']);
      }, 2000)
    });
  }
  public onUpload(event: any): void {
    this.profileService.photoUpdate(event).subscribe(() => {
      window.location.reload();
    });
  }

  public get userData(): userDataModel {
    return this.profileService.userData;
  }
}
