import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, of } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { AfMessageService } from 'src/app/services/message.service';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private login: string;
  private password: string;

  @Input() public remember: boolean;

  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: enumIconFloat.left,
  };

  constructor(private router: Router, 
    private message: AfMessageService,
    private translateService: TranslateService,
    private loginServ: LoginService) {
    this.translateService.setDefaultLang(sessionStorage.getItem("language") || ("en"));
  }
  
  public onClickLogin(): void {
    if (!this.login || !this.password) {
      this.message.addErrorMessage('Uzupełnij Login lub hasło', 'Błąd');
    } else {
      this.loginServ.login(this.login, this.password).subscribe(res=>{
        if(res == null){
          this.message.addErrorMessage('Błędny login lub hasło', 'Błąd');
        }
        else{
          this.loginServ.setLoggedUserId(res.id);
           this.router.navigate(['/home']);
        }
      });
     
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
