import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { userDataModel } from 'src/app/models';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class  AFProfileMenuComponent {
@Output() BackEmmiter: EventEmitter<void> = new EventEmitter();
@Input() isAdmin: boolean = false;
@Input() userData: userDataModel = {}; 

constructor(private router: Router){}

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }

  public navigateWithData(route: string): void {
    console.log(this.userData);
    this.router.navigate([`/profile/${route}`], { state: { userData: this.userData } });
  }

  public undo(): void {
    this.BackEmmiter.emit();
  }
}
