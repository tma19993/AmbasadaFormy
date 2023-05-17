import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'af-menuStatic',
  templateUrl: './menuStatic.component.html',
  styleUrls: ['./menuStatic.component.scss'],
})
export class MenuStaticComponent {
  public isMenuOpen: boolean = false;
  public activeOption: string = '';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(
      localStorage.getItem('language') || 'en'
    );
  }

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
    localStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
