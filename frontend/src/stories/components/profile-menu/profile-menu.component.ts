import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class  AFProfileMenuComponent {
@Output() LogoutEmmiter: EventEmitter<void> = new EventEmitter();
@Output() BackEmmiter: EventEmitter<void> = new EventEmitter();

  public logout(): void {
   this.LogoutEmmiter.emit();
  }

  public undo(): void {
    this.BackEmmiter.emit();
  }
}
