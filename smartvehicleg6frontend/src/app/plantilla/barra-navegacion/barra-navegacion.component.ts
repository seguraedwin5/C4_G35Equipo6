import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;

  

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe({
      next: (datos: ModeloIdentificar) => {
        this.seInicioSesion = datos.estaIdentificado;
        console.log(datos.estaIdentificado)
      },
      error: (error) => { console.log(error) }
    });
  }
} 
    
    
