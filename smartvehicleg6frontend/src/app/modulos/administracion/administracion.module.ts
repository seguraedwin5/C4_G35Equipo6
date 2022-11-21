import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearVehiculoComponent } from './personas/crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './productos/buscar-vehiculo/buscar-vehiculo.component';
import { EditarVehiculoComponent } from './productos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './productos/eliminar-vehiculo/eliminar-vehiculo.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
