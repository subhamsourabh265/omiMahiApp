import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShubhamRoutingModule } from './shubham-routing.module';
import { ShubhamPComponent } from './shubham-p/shubham-p.component';


@NgModule({
  declarations: [ShubhamPComponent],
  imports: [
    CommonModule,
    ShubhamRoutingModule
  ]
})
export class ShubhamModule { }
