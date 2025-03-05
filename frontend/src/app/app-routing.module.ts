import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcomePage/welcome-page.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'gym-pass',
    loadChildren: () =>
      import('./gym-pass/gym-pass.module').then((m) => m.GymPassModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'trainers',
    loadChildren: () =>
      import('./trainers/trainers.module').then((m) => m.TrainersModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./core/views/error-view/routes').then((m) => m.ROUTES_ERROR),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
