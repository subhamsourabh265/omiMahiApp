import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',   redirectTo: '/omi', pathMatch: 'full' },
  {
    path: 'omi',
    loadChildren: () => import('./modules/omi/omi.module').then(m => m.OmiModule)
  },
  {
    path: 'mahi',
    loadChildren: () => import('./modules/mahi/mahi.module').then(m => m.MahiModule)
  },
  {
    path: 'naitik',
    loadChildren: () => import('./modules/naitik/naitik.module').then(m => m.NaitikModule)
  },
  {
    path: 'shubham',
    loadChildren: () => import('./modules/shubham/shubham.module').then(m => m.ShubhamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
