import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VehiculosService } from 'src/app/servicios/administracion/vehiculos.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {


  constructor(private serviciovehiculo: VehiculosService) { }

  listavehiculos : ModeloVehiculo[] = []
  ngOnInit(): void {
    this.ListarVehiculos();
  }

  ListarVehiculos() {
    this.serviciovehiculo.ListarVehiculos$().subscribe({
      next: (newlistavehiculos) => {
        this.listavehiculos = newlistavehiculos;
      },
      error: (error) => {
        console.log(error)
      }
      
    });
  }
}
