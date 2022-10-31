import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoSolicitud: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha_Inicio: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha_entrega: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado_solicitud: string;

  @property({
    type: 'string',
  })
  clienteId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
