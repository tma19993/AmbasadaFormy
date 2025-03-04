import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class AFProfileMenuComponent {
  @Output() BackEmmiter: EventEmitter<void> = new EventEmitter();
  @Input() isAdmin: boolean = false;

  constructor(private router: Router) { }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate([]);
  }

  public navigateWithData(route: string): void {
    this.router.navigate([`/profile/${route}`]);
  }

  public undo(): void {
    this.BackEmmiter.emit();
  }
}
