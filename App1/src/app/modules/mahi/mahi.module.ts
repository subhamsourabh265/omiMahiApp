import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MahiRoutingModule } from './mahi-routing.module';
import { MahiPComponent } from './mahi-p/mahi-p.component';


@NgModule({
  declarations: [MahiPComponent],
  imports: [
    CommonModule,
    MahiRoutingModule
  ]
})
export class MahiModule { }
