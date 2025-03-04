import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'af-menu-static',
  templateUrl: './menu-static.component.html',
  styleUrls: ['./menu-static.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]

})
export class AFMenuStaticComponent {

  public isMenuOpen: boolean = false;
  public activeOption: string = '';

  constructor(private router: Router) { }

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


  public changeLanguage(id: string): void {
    sessionStorage.setItem('language', id);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  public startRouter(): void {
    this.activeOption = "home";
    this.router.navigate(['/home']);
  }
  public gymPassRouter(): void {
    this.activeOption = "gym-pass";
    this.router.navigate(['/gym-pass']);
  }
  public blogRouter(): void {
    this.activeOption = "blog";
    this.router.navigate(['/blog']);
  }
  public workoutsRouter(): void {
    this.activeOption = "trainers";
    this.router.navigate(['/trainers']);
  }
  public profileRouter(): void {
    this.activeOption = "profile";
    this.router.navigate(['/profile']);
  }
  public logoutEmit(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
