import { inject, Injectable } from '@angular/core';
import { AfMessageService, LoginService } from '../../../core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  private loginService: LoginService = inject(LoginService)
  private message: AfMessageService = inject(AfMessageService)

  canActivate(): boolean {
    const isLoggedIn = this.loginService.isLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.message.addErrorMessage("Wystąpił problem z logowaniem", "Błąd")
      return false;
    }
  }
}
