import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';
import { BlogComponent } from './blog.component';
import { FormDeactivateGuard } from '../auth/guards/form-deactivate/form-deactivate.guard';

const routes: Routes = [
  { path: '', component: BlogComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
