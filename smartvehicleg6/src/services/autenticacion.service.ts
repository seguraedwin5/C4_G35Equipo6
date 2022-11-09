import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { UsuarioRepository } from '../repositories';
const generador = require("password-generator");
const encritptar = require("crypto-js");


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
  };
  /*
   * Creacion de metodos de generacion y cifrado de clave
   */

}
