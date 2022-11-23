import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
