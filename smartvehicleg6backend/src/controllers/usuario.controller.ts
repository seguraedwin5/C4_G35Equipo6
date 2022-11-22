import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {llaves} from '../config/llaves';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import {AutenticacionService} from '../services';
const axios = require('axios')

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,

    @service(AutenticacionService)
    public authenticationService: AutenticacionService,
  ) { }

  //metodo para identificar usuario
  @post("/loginUsuario", {
    responses: {
      '200': {
        description: 'Identificacion de usuarios'
      }
    }
  })
  async LoginUsuario(
    @requestBody() credenciales: Credenciales
  ) {
    let user = await this.authenticationService.identificarUsuario(credenciales.usuario, credenciales.clave);
    if (user) {
      let token = this.authenticationService.generarTokenJWT(user);
      return {
        info: {
          usuario: user.correo,
          mail: user.correo,
          id: user.id
        },
        accestoken: token
      }
    } else {
      throw new HttpErrors[401]('Datos Invalidos');
    }
  };


  @post("/identificarUsuario", {
    responses: {
      '200': {
        description: "Identificación de usuarios"
      }
    }
  })
  async identificarUsuario(
    @requestBody() credenciales: Credenciales
  ) {
    const p = await this.authenticationService.identificarUsuario(credenciales.usuario, credenciales.clave);
    if (p) {
      const token = this.authenticationService.generarTokenJWT(p);
      return {
        datos: {
          nombre: p.nombres,
          correo: p.correo,
          id: p.id,
          rol: p.rol //es opscional xq ya va en el token
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Datos invalidos - no existe");
    }
  }

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    //implementar accion de notificacion
    let clave = this.authenticationService.GenerarClave();
    let claveCifrada = this.authenticationService.CifrarClave(clave);
    usuario.contrasena = claveCifrada
    let usercreated = await this.usuarioRepository.create(usuario);

    //notificar por correo
    let destino = usuario.correo;
    let asunto = "Usuario Registrado Correctamente";
    let contenido = `Hola ${usuario.correo} tu usuario es ${usuario.correo} \n y tu contraseña es ${clave}`;
    axios.get(`${llaves.urlnotificationservice}/envio-correo`, {
      params: {
        correo_destino: destino,
        asunto: asunto,
        contenido: contenido
      }
    }).then((res: any) => console.log(res.status))
    return usercreated;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
