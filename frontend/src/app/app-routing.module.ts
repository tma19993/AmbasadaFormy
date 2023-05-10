import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sites/login/login.component';
import { RegisterComponent } from './sites/register/register.component';
import { WelcomePageComponent } from './sites/welcomePage/welcomePage.component';
import { HomePageComponent } from './sites/homePage/homePage.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
// { path: 'my/**', component: HomePageComponent, canActivate: [AuthGuard]},
{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
