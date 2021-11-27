import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaitikRoutingModule } from './naitik-routing.module';
import { NaitikPComponent } from './naitik-p/naitik-p.component';


@NgModule({
  declarations: [NaitikPComponent],
  imports: [
    CommonModule,
    NaitikRoutingModule
  ]
})
export class NaitikModule { }
