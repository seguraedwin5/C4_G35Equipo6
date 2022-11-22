import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptarSolicitudComponent } from './asignacion-Solicitudes/aceptar-solicitud/aceptar-solicitud.component';
import { ListarSolicitudComponent } from './asignacion-Solicitudes/listar-solicitud/listar-solicitud.component';
import { RechazarSolicitudComponent } from './asignacion-Solicitudes/rechazar-solicitud/rechazar-solicitud.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  {
    path: 'editar-vehiculo',
    component: EditarVehiculoComponent
  },
  {
    path: 'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  },
  {
    path: 'listar-solicitud',
    component: ListarSolicitudComponent
  },
  {
    path: 'aceptar-solicitud',
    component: AceptarSolicitudComponent
  },
  {
    path: 'rechazar-solicitud',
    component: RechazarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
