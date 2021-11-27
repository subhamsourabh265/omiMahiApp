import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShubhamPComponent } from './shubham-p/shubham-p.component';


const routes: Routes = [
  {
    path: '',
    component: ShubhamPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShubhamRoutingModule { }
