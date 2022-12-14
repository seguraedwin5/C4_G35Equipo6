import { Component, OnInit } from '@angular/core';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/administracion/solicitud.service';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {

    listadoRegistros: ModeloSolicitud[] = [];
    
      constructor(private solicitudServicio: SolicitudService) { }
    
      ngOnInit(): void {
      }
        
}
