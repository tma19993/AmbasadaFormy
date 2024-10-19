import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import {
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'af-menuStatic',
  templateUrl: './menuStatic.component.html',
  styleUrls: ['./menuStatic.component.scss'],
})
export class MenuStaticComponent {
  @Output() logoutClick: EventEmitter<void> = new EventEmitter;

  public isMenuOpen: boolean = false;
  public activeOption: string = '';

  constructor(private router: Router) {}

  public toggleMenu(event: Event): void {
    const hamburger = document.querySelector(
      '.navigation_container__hamburger'
    ) as HTMLElement;
    if (!hamburger) {
      return;
    }

    const menuOptions = hamburger.querySelector(
      '.navigation_container__hamburger__options'
    ) as HTMLElement;
    const closeMenu = menuOptions?.querySelector('.close-menu');

    if (
      menuOptions && menuOptions.contains(event.target as Node) && closeMenu && (event.target === closeMenu || closeMenu.contains(event.target as Node))
    ) {
      this.isMenuOpen = false;
    } else if (hamburger.contains(event.target as Node)) {
      this.isMenuOpen = !this.isMenuOpen;
    } else {
      this.isMenuOpen = false;
    }
  }

  public toggleDetails(option: string): void {
    if (this.activeOption === option) {
      this.activeOption = '';
    } else {
      this.activeOption = option;
    }
  }

  public changeLanguage(id: string): void {
    sessionStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  public startEmit(): void {
    this.router.navigate(['/home']);
  }
  public gymPassEmit(): void {
    this.router.navigate(['/gym-pass']);
  }
  public blogEmit(): void {
    this.router.navigate(['/blog']);
  }
  public workoutsEmit(): void {
    this.router.navigate(['/home']);
  }
  public profileEmit(): void {
    this.router.navigate(['/profile']);
  }
  public logoutEmit(): void {
    this.logoutClick.emit();
  }

}
