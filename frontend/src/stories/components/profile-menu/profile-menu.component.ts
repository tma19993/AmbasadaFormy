import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from 'src/app/api';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AFButtonComponent } from '../button/button.component';

@Component({
  selector: 'af-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    AFButtonComponent,
    TranslateModule,
    AppRoutingModule,
  ]
})
export class AFProfileMenuComponent implements OnInit {
  @Output() BackEmmiter: EventEmitter<void> = new EventEmitter();
  @Input() isAdmin: boolean = false;

  constructor(private router: Router, private proflieService: ProfileService) { }

  public ngOnInit(): void {
   
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
