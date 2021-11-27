import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaitikPComponent } from './naitik-p/naitik-p.component';


const routes: Routes = [
  {
    path: '',
    component: NaitikPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaitikRoutingModule { }
