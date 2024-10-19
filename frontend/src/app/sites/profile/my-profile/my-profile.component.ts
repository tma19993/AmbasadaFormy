import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataModel } from 'src/app/models';
import { LoginService, ProfileService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit{
  public userData$: Observable<userDataModel>;

constructor(
  private loginService: LoginService,
  private profileService: ProfileService,
  ){}

  public ngOnInit(): void {
    this.userData$ = this.profileService.getUserData();
    
  }

public removeUser(): void {
  this.profileService.removeUser().subscribe(()=>{
      setTimeout(()=>{
        this.loginService.logout();
  },2000)
  });
}
public onUpload(event: any): void {
  const file = event.files[0];
  const formData = new FormData();
  formData.append('photo', file);
  this.profileService.photoUpdate(event).subscribe(()=>{
    window.location.reload();
  });
}
}
