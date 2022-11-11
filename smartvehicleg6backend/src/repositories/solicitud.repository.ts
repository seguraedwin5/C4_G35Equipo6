import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Solicitud, SolicitudRelations} from '../models';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.Id,
  SolicitudRelations
> {
  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource,
  ) {
    super(Solicitud, dataSource);
  }
}
