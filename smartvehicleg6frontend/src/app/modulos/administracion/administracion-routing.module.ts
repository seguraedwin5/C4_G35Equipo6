import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent
  },
  {
    path: 'eliminar-persona',
    component: EliminarPersonaComponent
  },
  {
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent
  },
  {
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent
  },
  {
    path: 'listar-vehiculos',
    component: ListarVehiculosComponent
  },
  {
    path: 'buscar-vehiculo/:id',
    component: BuscarVehiculoComponent
  },
  {
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
