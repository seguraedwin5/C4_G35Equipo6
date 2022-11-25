import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  fgvalidador: FormGroup;
    
  

  constructor(private fb: FormBuilder) { 
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
    
  }
  

  ngOnInit(): void {
  }

}
