import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Administrador,
  Asesor,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorAsesorController {
  constructor(
    @repository(AdministradorRepository)
    public administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/asesor', {
    responses: {
      '200': {
        description: 'Asesor belonging to Administrador',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asesor)},
          },
        },
      },
    },
  })
  async getAsesor(
    @param.path.string('id') id: typeof Administrador.prototype.id,
  ): Promise<Asesor> {
    return this.administradorRepository.asesor(id);
  }
}
