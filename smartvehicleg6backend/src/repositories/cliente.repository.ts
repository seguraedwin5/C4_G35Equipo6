import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Cliente, ClienteRelations, Usuario, Solicitud} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {SolicitudRepository} from './solicitud.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Cliente.prototype.id>;

  public readonly solicitudesCliente: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Cliente, dataSource);
    this.solicitudesCliente = this.createHasManyRepositoryFactoryFor('solicitudesCliente', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudesCliente', this.solicitudesCliente.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
