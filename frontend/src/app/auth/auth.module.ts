import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AFTileComponent } from '../shared/components/tile/tile.component';
import { AFButtonComponent } from '../shared/components/button/button.component';
import { AFInputComponent } from '../shared/components/input/input.component';
import { AFCheckboxComponent } from '../shared/components/checkbox/checkbox.component';
import { AFPasswordComponent } from '../shared/components/password/password.component';
import { AFLanguageChangerComponent } from '../shared/components/language-changer/language-changer.component';
import { GymPassRoutingModule } from './auth-routing.module';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    AFTileComponent,
    AFButtonComponent,
    AFInputComponent,
    AFCheckboxComponent,
    AFPasswordComponent,
    AFLanguageChangerComponent,
    GymPassRoutingModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    GymPassRoutingModule
  ]
})
export class AuthModule { }
