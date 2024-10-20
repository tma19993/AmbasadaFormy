import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class  AFProfileMenuComponent {
@Output() LogoutEmmiter: EventEmitter<void> = new EventEmitter();
@Output() BackEmmiter: EventEmitter<void> = new EventEmitter();
@Input() isAdmin: boolean = false;

  public logout(): void {
   this.LogoutEmmiter.emit();
  }

  public undo(): void {
    this.BackEmmiter.emit();
  }
}
