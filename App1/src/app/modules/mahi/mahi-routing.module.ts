import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahiPComponent } from './mahi-p/mahi-p.component';


const routes: Routes = [
  {
    path: '',
    component: MahiPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahiRoutingModule { }
