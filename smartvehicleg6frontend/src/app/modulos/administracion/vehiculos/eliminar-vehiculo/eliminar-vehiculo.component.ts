import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from 'src/app/servicios/administracion/vehiculos.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serviciovehiculos:VehiculosService, private router:Router) { }
  id: string = '';
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        this.id = parametros['id'];
        this.serviciovehiculos.EliminarVehiculo$(this.id).subscribe({
          next: (vehiculo) => {
            console.log("vehiculo eliminado")
          },
          error: (error) => {
            alert("no se pudo eliminar el vehiculo, revise la conexion" + error.message)
          }
        });
        alert(`vehiculo eliminado`);
            this.router.navigate(['/administracion/listar-vehiculos'])
      },
      error: (error) => {
        alert("error al  eliminar, verifique que el vehiculo exista"+ error.error)
      }
    })
  }

  
    
  
  
}
