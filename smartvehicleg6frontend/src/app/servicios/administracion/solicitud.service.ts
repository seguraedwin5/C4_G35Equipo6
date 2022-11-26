import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url  = environment.apiurl
  constructor(private http: HttpClient) { }
  
  ListarSolicitudes$(): Observable<ModeloSolicitud[]>{
    return this.http.get<ModeloSolicitud[]>(`${this.url}/solicitud`);
  }

  AgregarSolicitud$(solicitud:ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post<ModeloSolicitud>(`${this.url}/solicitud`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': '',
      })
    });
  }

  EditarSolicitud$(solicitud:ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post<ModeloSolicitud>(`${this.url}/solicitud`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': '',
      })
    });
  }

  BuscarSolicitud$(id: string): Observable<ModeloSolicitud>{
    return this.http.get<ModeloSolicitud>(`${this.url}/solicitud/${id}`);
  }


  EliminarSolicitud$(id: string): Observable<ModeloSolicitud>{
    return this.http.delete<ModeloSolicitud>(`${this.url}/solicitud/${id}`)
  }
}
