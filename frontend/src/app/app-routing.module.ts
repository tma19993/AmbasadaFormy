import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AdminPageComponent, BlogComponent, DietsComponent, GymPassComponent, GymPassesComponent, HomePageComponent, LoginComponent, MyProfileComponent, PersonalTrainerComponent, ProfileComponent, RegisterComponent, TrainersComponent, WelcomePageComponent } from './sites';

const routes: Routes = [
{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomePageComponent ,canActivate: [AuthGuard]},
{ path: 'gym-pass', component: GymPassComponent,canActivate: [AuthGuard] },
{ path: 'blog', component: BlogComponent,canActivate: [AuthGuard] },
{ path: 'trainers', component: TrainersComponent,canActivate: [AuthGuard] },
{ 
  path: 'profile',
  component: ProfileComponent, canActivate: [AuthGuard],
  children: [
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'personal-trainers', component: PersonalTrainerComponent },
    { path: 'gym-pass', component: GymPassesComponent },
    { path: 'diets', component: DietsComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' } 
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
