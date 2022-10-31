import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations} from '../models';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.Id,
  VehiculoRelations
> {
  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource,
  ) {
    super(Vehiculo, dataSource);
  }
}
