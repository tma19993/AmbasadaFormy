import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { ProfileService } from 'src/app/api';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public userData$: Observable<userDataModel>;
  public user: userDataModel

constructor(
  private router: Router,
  private location: Location,
  private profileService: ProfileService,
  ){}

  public ngOnInit(): void {
    const dataFromLocation = this.location.getState() as { userData: userDataModel };
    this.user = dataFromLocation?.userData;
    console.log(this.user);
   
  }

public removeUser(): void {
  this.profileService.removeUser().subscribe(()=>{
      setTimeout(()=>{
          sessionStorage.clear();
          this.router.navigate(['/welcome']);
  },2000)
  });
}
public onUpload(event: any): void {
  this.profileService.photoUpdate(event).subscribe(()=>{
    window.location.reload();
  });
}
}
