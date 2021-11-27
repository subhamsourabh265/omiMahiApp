import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiEmeaRoutingModule } from './citi-emea-routing.module';
import { QuadrantScreenComponent } from './quadrant-screen/quadrant-screen.component';


@NgModule({
  declarations: [QuadrantScreenComponent],
  imports: [
    CommonModule,
    CitiEmeaRoutingModule
  ]
})
export class CitiEmeaModule { }
