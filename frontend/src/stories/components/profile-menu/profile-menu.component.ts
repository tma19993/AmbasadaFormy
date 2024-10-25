import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/api';
import { userDataModel } from 'src/app/models';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class AFProfileMenuComponent implements OnInit {
  @Output() BackEmmiter: EventEmitter<void> = new EventEmitter();
  @Input() isAdmin: boolean = false;
  @Input() userData: userDataModel = {};

  constructor(private router: Router, private proflieService: ProfileService) { }

  public ngOnInit(): void {
    this.proflieService.setUserData(this.userData);
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }

  public navigateWithData(route: string): void {
    this.router.navigate([`/profile/${route}`]);
  }

  public undo(): void {
    this.BackEmmiter.emit();
  }
}
