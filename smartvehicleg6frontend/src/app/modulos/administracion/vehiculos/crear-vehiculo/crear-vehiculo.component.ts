import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/administracion/vehiculos.service';
@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  fgvalidador: FormGroup;
  private vehiculo: ModeloVehiculo;
  

  constructor(private fb: FormBuilder, private serviciovehiculo: VehiculosService) { 
    this.fgvalidador = this.fb.group({
        'nombre': ['',[Validators.required]],
        'tipo': ['',[Validators.required]],
        'marca': ['',[Validators.required]],
        'placa': ['',[Validators.required]],
        'disponibilidad': ['',[Validators.required]],
        'descripcion': ['',[Validators.required]],
        'foto': ['',[Validators.required]],
        'valor': ['',[Validators.required]],
        'departamento': ['',[Validators.required]],
        'ciudad': ['',[Validators.required]],
        'direccion': ['',[Validators.required]],
        'tipooferta': ['',[Validators.required]]
      })
    
    this.vehiculo = new ModeloVehiculo()
  }
  

  ngOnInit(): void {
  }

  CrearVehiculo() {
    this.vehiculo!.Nombre = this.fgvalidador.controls['nombre'].value;
    this.vehiculo!.Tipo = this.fgvalidador.controls['tipo'].value
    this.vehiculo!.Marca = this.fgvalidador.controls['marca'].value
    this.vehiculo!.Placa = this.fgvalidador.controls['placa'].value
    this.vehiculo!.Disponibilidad = this.fgvalidador.controls['disponibilidad'].value
    this.vehiculo!.Descripcion = this.fgvalidador.controls['descripcion'].value
    this.vehiculo!.Foto = this.fgvalidador.controls['foto'].value
    this.vehiculo!.Valor = this.fgvalidador.controls['valor'].value
    this.vehiculo!.Departamento = this.fgvalidador.controls['departamento'].value
    this.vehiculo!.Ciudad = this.fgvalidador.controls['ciudad'].value
    this.vehiculo!.Direccion = this.fgvalidador.controls['direccion'].value
    this.vehiculo!.TipoOferta = this.fgvalidador.controls['tipooferta'].value
    this.serviciovehiculo.AgregarVehiculo$(this.vehiculo!).subscribe({
    
      next: (datos) => {
        alert( `Vehiculo ${datos.Marca} Placa: ${datos.Placa} Creado Correctamente `)
      },
      error: (err) => {
        alert('no se pudo crear el vehiculo')
      }
    })
  }
}
