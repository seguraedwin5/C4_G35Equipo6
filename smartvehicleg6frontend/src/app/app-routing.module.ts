import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

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
    path: 'pedidos',
    loadChildren: () => import("./modulos/contactenos/contactenos.module").then(x => x.ContactenosModule) 
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