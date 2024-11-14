import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AfMessageService, LoginService, RegisterService } from 'src/app/core/services';
import { GenderArray } from 'src/app/shared/constants/gender-array';
import { EnumIconFloat } from 'src/app/shared/enums';
import { genderKey, GenderModel, inputIconConfig, userDataModel } from 'src/app/shared/models';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  private router: Router = inject(Router);
  private messageService: AfMessageService = inject(AfMessageService);
  private translateService: TranslateService = inject(TranslateService);
  private registerService: RegisterService = inject(RegisterService);
  private loginServ: LoginService = inject(LoginService);
  private formBuilder: FormBuilder = inject(FormBuilder);

  public genderCheckboxDisabled: boolean = false;
  public accountData: userDataModel = {};
  public genderArray: GenderModel[] = GenderArray;
  public form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    login: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators]],
    repeatPassowrd: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{9}")]],
    address: ['', Validators.required],
    gender: ['', Validators.required],
  });


  public ngOnInit(): void {
    this.translateService.setDefaultLang(
      sessionStorage.getItem('language') || 'en'
    );
  }

  public submit(): void {
    this.beforeSubmit();
    if (this.form.invalid) {
      this.messageService.addErrorMessage('Nie wszystkie pola są wypełnione');
      return;
    }
    this.registerService.register(this.form.value).subscribe((res) => {
      this.messageService.addSuccesMessage('Zostałeś Zarejestrowany');
      this.loginServ.setLoggedUserId(res.id);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    });
  }

  public goToWelcomePage(): void {
    this.router.navigate(['/welcome']);
  }

  public getGender(event: any, id: number): void {
    this.genderArray[id].checked = event;
    this.genderCheckboxDisabled = this.genderArray.some(
      (gender) => gender.checked
    );
    this.form.controls['gender'].setValue(this.genderArray[id].key);
  }

  private beforeSubmit(): void {
    if (this.validReapeatedPassword()) {
      this.messageService.addErrorMessage('Podane hasła nie są identyczne');
      return;
    }
  }

  private validReapeatedPassword(): boolean {
    const { password, repeatedPassword } = this.form.value;
    return password === repeatedPassword;
  }

}
