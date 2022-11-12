import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { llaves } from '../config/llaves';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const generador = require("password-generator");
const encritptar = require("crypto-js");
const jwt = require("jsonwebtoken");


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository
  ) {}

  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  };

  CifrarClave(clave: string) {
    let claveCifrada = encritptar.MD5(clave).toString();
    return claveCifrada;
  }
  identificarUsuario(usuario: string, clave: string){
    try {
      const a = this.usuarioRepository.findOne({where : {correo: usuario, contrasena: clave}});
      if (a){
        return a;
      }
      return false;
    } catch {
      return false;
    }
  }
  generarTokenJWT(usuario: Usuario){
    const token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        contrasena: usuario.contrasena,
        rol: usuario.rol = usuario
      }
    }, llaves.claveJWT);
  return token;
  }
  ValidarTokenJWT(token: string){
    try {
      let datos = jwt.verify(token, llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
