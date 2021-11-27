import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmiRoutingModule } from './omi-routing.module';
import { OmiPComponent } from './omi-p/omi-p.component';


@NgModule({
  declarations: [OmiPComponent],
  imports: [
    CommonModule,
    OmiRoutingModule
  ]
})
export class OmiModule { }
