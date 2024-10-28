import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/api';
import { userDataModel } from 'src/app/features/models';

@Component({
  selector: 'app-gym-passes',
  templateUrl: './gym-passes.component.html',
  styleUrls: ['./gym-passes.component.scss']
})
export class GymPassesComponent {
  public user: userDataModel;
  constructor(
    private profileService: ProfileService,
    ){}
  
    public ngOnInit(): void {
      this.profileService.userData$.subscribe(data => {
        this.user = data;
      });
    }
  
}
