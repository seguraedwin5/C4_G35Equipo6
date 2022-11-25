import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = `http://localhost:3000`;
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({
      })
    })
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado=true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }


  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion() {
    this.VerificarSesionActual()
    return this.datosUsuarioEnSesion.asObservable();
  }

}
