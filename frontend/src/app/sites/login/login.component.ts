import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AfMessageService } from 'src/app/services/message.service';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private login: string | undefined;
  private password: string | undefined;

  @Input() public remember: boolean | undefined;

  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: enumIconFloat.left,
  };

  constructor(private router: Router, private message: AfMessageService) {}

  public onClickLogin(): void {
    if (!this.login && !this.password) {
      this.message.addErrorMessage('Uzupełnij Login lub hasło', 'Błąd');
    } else if (!this.login) {
      this.message.addErrorMessage('Uzupełnij login', 'Błąd');
    } else if (!this.password) {
      this.message.addErrorMessage('Uzupełnij hasło', 'Błąd');
    } else {
      // this.router.navigate(['/home']);
    }
  }

  public backToWelcomePage(): void {
    this.router.navigate(['/welcome']);
  }

  public getRemeberPassword(event: any): void {
    console.log(event);
  }

  public getLogin(event: any): void {
    this.login = event;
  }
  public getPassword(event: any): void {
    this.password = event;
  }
}
