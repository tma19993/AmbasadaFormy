import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';
import { AFAdminPageComponent, AFDietsComponent, AFGymPassesComponent, AFMyProfileComponent, AFPersonalTrainerComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, canActivate: [AuthGuard], children: [
      { path: 'my-profile', component: AFMyProfileComponent, canActivate: [AuthGuard] },
      { path: 'personal-trainers', component: AFPersonalTrainerComponent, canActivate: [AuthGuard] },
      { path: 'gym-pass', component: AFGymPassesComponent, canActivate: [AuthGuard] },
      { path: 'diets', component: AFDietsComponent, canActivate: [AuthGuard] },
      { path: 'admin', component: AFAdminPageComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'my-profile', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
