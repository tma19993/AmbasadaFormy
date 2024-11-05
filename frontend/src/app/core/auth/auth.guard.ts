import { Injectable } from '@angular/core';
import { AfMessageService, LoginService } from 'src/app/shared';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private loginService: LoginService, private message: AfMessageService) {}
  canActivate(): boolean {
    const isLoggedIn = this.loginService.isLoggedIn(); 
    if (isLoggedIn) {
        return true;
    } else {
        this.message.addErrorMessage("Wystąpił problem z logowaniem","Błąd")
        return false;
    }
  }

  
}
