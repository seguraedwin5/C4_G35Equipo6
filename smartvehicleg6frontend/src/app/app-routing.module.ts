import { NgModule } from '@angular/core';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule) 
  },
  {
    path: 'nosotros',
    loadChildren: () => import("./modulos/nosotros/nosotros.module").then(x => x.NosotrosModule) 
  },
  {
    path: 'asesor',
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule) 
  },
  {
    path: 'cliente',
    loadChildren: () => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule) 
  },
  {
    path: 'contactenos',
    loadChildren: () => import("./modulos/contactenos/contactenos.module").then(x => x.ContactenosModule) 
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }