import { Component } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent {

  
  constructor(private builder: FormBuilder) { }
  fgcrear: FormGroup = this.builder.group({
    'name': []
  })
}
