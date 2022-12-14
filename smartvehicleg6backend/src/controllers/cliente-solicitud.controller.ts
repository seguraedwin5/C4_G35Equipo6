import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  Solicitud,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteSolicitudController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/solicitudes', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.clienteRepository.solicitudesCliente(id).find(filter);
  }

  @post('/clientes/{id}/solicitudes', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInCliente',
            exclude: ['Id'],
            optional: ['clienteId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'Id'>,
  ): Promise<Solicitud> {
    return this.clienteRepository.solicitudesCliente(id).create(solicitud);
  }

  @patch('/clientes/{id}/solicitudes', {
    responses: {
      '200': {
        description: 'Cliente.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.clienteRepository.solicitudesCliente(id).patch(solicitud, where);
  }

  @del('/clientes/{id}/solicitudes', {
    responses: {
      '200': {
        description: 'Cliente.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.clienteRepository.solicitudesCliente(id).delete(where);
  }
}
