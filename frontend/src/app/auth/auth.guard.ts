import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { LoginService } from '../services/login.service';
import { AfMessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

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
