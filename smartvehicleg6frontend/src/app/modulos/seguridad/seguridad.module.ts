import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule, 	
    ReactiveFormsModule,
    SweetAlert2Module,
    SweetAlert2Module.forChild(),
    SweetAlert2Module.forRoot(),
  ]
})
export class SeguridadModule { }
