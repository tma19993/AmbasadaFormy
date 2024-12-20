import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AFPreviousRouteService {
  private previousUrl: string | undefined;
  private currentUrl: string | undefined;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl(): string | undefined {
    return this.previousUrl;
  }
}
