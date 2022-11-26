import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  url  = environment.apiurl
  constructor(private http: HttpClient) { }
  
  ListarVehiculos$(): Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }

  AgregarVehiculo$(vehiculo:ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': '',
      })
    });
  }

  EditarVehiculo$(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    console.log(vehiculo)
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.Id}`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': '',
      })
    });
  }

  BuscarVehiculo$(id: string): Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }


  EliminarVehiculo$(id: string): Observable<ModeloVehiculo>{
    return this.http.delete<ModeloVehiculo>(`${this.url}/vehiculos/${id}`)
  }
}
