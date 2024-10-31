import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AfMessageService } from 'src/app/features';
import { userDataModel } from 'src/app/features/models';
import { GenderModel, genderKey } from 'src/app/features/models/gender.model';
import { LoginService, RegisterService } from 'src/app/api';

import { EnumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: EnumIconFloat.left,
  };

  public mailData: inputIconConfig = {
    iconClassName: 'pi-envelope',
    iconFloat: EnumIconFloat.left,
  };

  public phoneIconConfig: inputIconConfig = {
    iconClassName: 'pi-phone',
    iconFloat: EnumIconFloat.left,
  };

  public emailIconConfig: inputIconConfig = {
    iconClassName: 'pi-at',
    iconFloat: EnumIconFloat.left,
  };
  public nameIconConfig: inputIconConfig = {
    iconClassName: 'pi-id-card',
    iconFloat: EnumIconFloat.left,
  };

  public genderCheckboxDisabled: boolean = false;
  public accountData: userDataModel = {};
  public form: FormGroup;
  public genderArray: GenderModel[] = [
    { name: 'Male', checked: false, key: genderKey.Male },
    { name: 'Female', checked: false, key: genderKey.Female },
    { name: 'Other', checked: false, key: genderKey.other },
  ];

  constructor(
    private router: Router,
    private messageService: AfMessageService,
    private translateService: TranslateService,
    private registerService: RegisterService,
    private loginServ: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.translateService.setDefaultLang(
      sessionStorage.getItem('language') || 'en'
    );
  }

  public ngOnInit(): void {
    this.buildForm();
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

  private buildForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      login: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassowrd: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
}
