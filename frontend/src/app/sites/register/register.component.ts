import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { userDataModel } from 'src/app/models';
import { GenderModel, genderKey } from 'src/app/models/gender.model';
import { AfMessageService, RegisterService } from 'src/app/services';

import { enumIconFloat } from 'src/stories/enums/input.enum';
import { inputIconConfig } from 'src/stories/interfaces/input.model';

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
  public accountData: userDataModel = {};
  public genderArray: GenderModel[] =[];
  private repeatedPassword: string = "";
   
  constructor(
    private router: Router,
    private messageService: AfMessageService,
    private translateService: TranslateService,
    private registerService: RegisterService) {
    this.translateService.setDefaultLang(sessionStorage.getItem("language") || ("en"));
    this.getTranslationGenderData();
  }

  public goToHomePage(): void {
    if(this.validation()){
      this.registerService.register(this.accountData).subscribe(res=>{
        this.messageService.addErrorMessage('Zostałeś Zarejestrowany');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },2000);
      })
    
    }
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

  private getTranslationGenderData():void{
    this.translateService.get("registerLogin.genderType").subscribe((translate)=>{
      const keys = Object.keys(translate);
      const name:string[] = Object.values(translate);
      if(name.length == keys.length){

        for (let i = 0; i < name.length; i++) {
          const object:GenderModel = {
              "key": keys[i] as genderKey,
              "name": name[i],
              "checked": false
          }
           this.genderArray.push(object);
        }
      }
    })
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
