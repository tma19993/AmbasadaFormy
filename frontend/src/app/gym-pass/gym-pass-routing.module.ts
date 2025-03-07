import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymPassComponent } from './gym-pass.component';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: GymPassComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymPassRoutingModule { }
