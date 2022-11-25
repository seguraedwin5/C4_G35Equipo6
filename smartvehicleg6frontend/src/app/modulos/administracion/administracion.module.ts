import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { BuscarSolicitudComponent } from './solicitudes/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudesComponent } from './solicitudes/listar-solicitudes/listar-solicitudes.component';



@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent,
    ListarVehiculosComponent,
    SolicitudesComponent,
    BuscarSolicitudComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    ListarSolicitudesComponent,
    
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministracionModule { }
