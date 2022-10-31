import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Cliente, ClienteRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Cliente, dataSource);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
