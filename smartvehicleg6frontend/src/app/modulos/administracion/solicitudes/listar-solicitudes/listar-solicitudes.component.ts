import { Component } from '@angular/core';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/administracion/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent {
  constructor(private serviciosolicitud: SolicitudService) { }

  listasolicitudes : ModeloSolicitud[] = []
  ngOnInit(): void {
    this.ListarSolicitudes();
  }

  ListarSolicitudes() {
    this.serviciosolicitud.ListarSolicitudes$().subscribe({
      next: (newlistasolicitudes:any) => {
        this.listasolicitudes = newlistasolicitudes;
      },
      error: (error:any) => {
        console.log(error)
      }
      
    });
  }
}
