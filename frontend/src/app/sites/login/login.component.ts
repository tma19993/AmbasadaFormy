import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, EMPTY, of, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { AfMessageService } from 'src/app/services/message.service';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  @Input() public remember: boolean;
  public myForm: FormGroup;
  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: enumIconFloat.left,
  };

  constructor(private router: Router, 
    private message: AfMessageService,
    private translateService: TranslateService,
    private loginServ: LoginService,
    private formBuilder: FormBuilder) {
    this.translateService.setDefaultLang(sessionStorage.getItem("language") || ("en"));
  }

  public ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        login:["",Validators.required],
        password:["",Validators.required],
      })
  }
  
  public submitLogin(): void {
    if (this.myForm.invalid) {
      this.message.addErrorMessage('Uzupełnij Login lub hasło', 'Błąd');
      return;
    }
    const { login, password } = this.myForm.controls

    this.loginServ.login(login.value, password.value).pipe(tap(res => {
      this.loginServ.setLoggedUserId(res.id);
      this.router.navigate(['/home']);
    }),
      catchError(err => {
        this.message.addErrorMessage('Błędny login lub hasło', 'Błąd');
        console.log(err);
        return EMPTY;
      })).subscribe();
  }

  public backToWelcomePage(): void {
    this.router.navigate(['/welcome']);
  }

  public getRemeberPassword(event: any): void {
    console.log(event);
  }

}
