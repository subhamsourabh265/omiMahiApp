import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadrantScreenComponent } from './quadrant-screen/quadrant-screen.component';


const routes: Routes = [
  {
    path: '',
    component: QuadrantScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiEmeaRoutingModule { }
