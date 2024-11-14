import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent, GymPassComponent, HomePageComponent, LoginComponent, RegisterComponent, TrainersComponent, WelcomePageComponent } from './features/main-pages';

import { ProfileComponent } from './features/main-pages/profile/profile.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AFAdminPageComponent, AFDietsComponent, AFGymPassesComponent, AFMyProfileComponent, AFPersonalTrainerComponent } from './features/profile-pages';

const routes: Routes = [
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
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
    { path: 'my-profile', component: AFMyProfileComponent },
    { path: 'personal-trainers', component: AFPersonalTrainerComponent },
    { path: 'gym-pass', component: AFGymPassesComponent },
    { path: 'diets', component: AFDietsComponent },
    { path: 'admin', component: AFAdminPageComponent },
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' } 
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
