import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculosService } from 'src/app/servicios/administracion/vehiculos.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  fgvalidador: FormGroup;
  private vehiculo: ModeloVehiculo;
  id: string = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private serviciovehiculo: VehiculosService, private router: Router) {
    this.fgvalidador = this.fb.group({
      'nombre': ['', [Validators.required]],
      'tipo': ['', [Validators.required]],
      'marca': ['', [Validators.required]],
      'placa': ['', [Validators.required]],
      'disponibilidad': ['', [Validators.required]],
      'descripcion': ['', [Validators.required]],
      'foto': ['', [Validators.required]],
      'valor': ['', [Validators.required]],
      'departamento': ['', [Validators.required]],
      'ciudad': ['', [Validators.required]],
      'direccion': ['', [Validators.required]],
      'tipooferta': ['', [Validators.required]]
    })
    
    this.vehiculo = new ModeloVehiculo()
    
  
  }
  

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        this.id = parametros['id'];
      }
    });
    this.BuscarVehiculo();
  }

  BuscarVehiculo() { 
    this.serviciovehiculo.BuscarVehiculo$(this.id).subscribe({
      next: (vehiculo: ModeloVehiculo) => {
        this.fgvalidador.controls['nombre'].setValue(vehiculo.Nombre);
        this.fgvalidador.controls['tipo'].setValue(vehiculo.Tipo)
        this.fgvalidador.controls['marca'].setValue(vehiculo.Marca)
        this.fgvalidador.controls['placa'].setValue(vehiculo.Placa)
        this.fgvalidador.controls['disponibilidad'].setValue(vehiculo.Disponibilidad)
        this.fgvalidador.controls['descripcion'].setValue(vehiculo.Descripcion)
        this.fgvalidador.controls['foto'].setValue(vehiculo.Foto)
        this.fgvalidador.controls['valor'].setValue(vehiculo.Valor)
        this.fgvalidador.controls['departamento'].setValue(vehiculo.Departamento)
        this.fgvalidador.controls['ciudad'].setValue(vehiculo.Ciudad)
        this.fgvalidador.controls['direccion'].setValue(vehiculo.Direccion)
        this.fgvalidador.controls['tipooferta'].setValue(vehiculo.TipoOferta)
      }
    })
  }
  
  EditarVehiculo() {
    
      
    this.vehiculo!.Id = this.id  
    this.vehiculo!.Nombre = this.fgvalidador.controls['nombre'].value;
    this.vehiculo!.Tipo = this.fgvalidador.controls['tipo'].value
    this.vehiculo!.Marca = this.fgvalidador.controls['marca'].value
    this.vehiculo!.Placa = this.fgvalidador.controls['placa'].value
    this.vehiculo!.Disponibilidad = this.fgvalidador.controls['disponibilidad'].value
    this.vehiculo!.Descripcion = this.fgvalidador.controls['descripcion'].value
    this.vehiculo!.Foto = this.fgvalidador.controls['foto'].value
    this.vehiculo!.Valor = this.fgvalidador.controls['valor'].value.toString()
    this.vehiculo!.Departamento = this.fgvalidador.controls['departamento'].value
    this.vehiculo!.Ciudad = this.fgvalidador.controls['ciudad'].value
    this.vehiculo!.Direccion = this.fgvalidador.controls['direccion'].value
    this.vehiculo!.TipoOferta = this.fgvalidador.controls['tipooferta'].value
    
    this.serviciovehiculo.EditarVehiculo$(this.vehiculo!).subscribe({
    
      next: (datos) => {
        alert(`Vehiculo Actulizado Correctamente `)
        this.router.navigate(['/administracion/listar-vehiculos'])
      },
      error: (err) => {
        alert('no se pudo crear el vehiculo')
      }
    })
  }

}
