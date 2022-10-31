import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Asesor,
  Cliente,
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorClienteController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Asesor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Asesor.prototype.id,
  ): Promise<Cliente> {
    return this.asesorRepository.cliente(id);
  }
}
