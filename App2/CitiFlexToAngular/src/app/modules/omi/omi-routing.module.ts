import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmiPComponent } from './omi-p/omi-p.component';


const routes: Routes = [
  {
    path: '',
    component: OmiPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmiRoutingModule { }
