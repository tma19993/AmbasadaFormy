import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from 'src/app/models/register.model';
import { AfMessageService } from 'src/app/services/message.service';
import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';
import { Categories } from 'src/stories/interfaces/radiobutton.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: enumIconFloat.left,
  };

  public mailData: inputIconConfig = {
    iconClassName: 'pi-envelope',
    iconFloat: enumIconFloat.left,
  };
  public genderCheckboxDisabled: boolean = false;
  public accountData: registerData = {};
  public genderArray: Categories[] = [
    {
      name: 'Mężczyzna',
      key: 'men',
      checked: false,
    },
    {
      name: 'Kobieta',
      key: 'woman',
      checked: false,
    },
    {
      name: 'Inna',
      key: 'other',
      checked: false,
    },
  ];
  private repeatedPassword: string= "";
   
  constructor(
    private router: Router,
    private messageService: AfMessageService
  ) {}

  public goToHomePage(): void {
    if(this.validation()){
      console.log("logowanie udane");
    // this.router.navigate(['/home']);
    }
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public goToWelcomePage(): void {
    this.router.navigate(['/welcome']);
  }

  public getGender(event: any, id: number): void {
    this.genderArray[id].checked = event;
    this.genderCheckboxDisabled = this.genderArray.some(
      (gender) => gender.checked
    );
    this.accountData.gender = this.genderArray[id].key; 
  }

  public getData(data: string, inputId: "firstName" | "lastName" | "login" | "email" | "password" ):void {
    switch (inputId){
      case 'firstName': this.accountData.firstName = data;break;
      case 'lastName':this.accountData.lastName = data;break;
      case 'login':this.accountData.login = data;break;
      case 'email':this.accountData.email = data;break;
      case 'password':this.accountData.password = data;break;
    }
  };

 public getReapeatedPassword(event:string):void{
  this.repeatedPassword = event;
  }

  private validation():Boolean{
    if(this.repeatedPassword != this.accountData.password && !!this.accountData.password){
      this.messageService.addErrorMessage("Podane hasła nie są identyczne")
      return false;
    }
    else if(!this.accountData.firstName || !this.accountData.lastName || !this.accountData.login || !this.accountData.email || !this.accountData.password ||  !this.accountData.gender){
      this.messageService.addErrorMessage("Nie wszystkie pola są wypełnione")
      return false;
    }
    else{
      return true
    }
  }
}
