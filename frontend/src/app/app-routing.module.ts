import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sites/login/login.component';
import { RegisterComponent } from './sites/register/register.component';
import { WelcomePageComponent } from './sites/welcomePage/welcomePage.component';
import { HomePageComponent } from './sites/homePage/homePage.component';
import { GymPassComponent } from './sites/gym-pass/gym-pass.component';
import { ProfileComponent } from './sites/profile/profile.component';
import { BlogComponent } from './sites/blog/blog.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomePageComponent ,canActivate: [AuthGuard]},
{ path: 'gym-pass', component: GymPassComponent,canActivate: [AuthGuard] },
{ path: 'profile', component: ProfileComponent,canActivate: [AuthGuard] },
{ path: 'blog', component: BlogComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
