import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { TrainersComponent } from './trainers.component';

const routes: Routes = [
  { path: '', component: TrainersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
