import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Asesor, AsesorRelations, Usuario, Cliente} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {ClienteRepository} from './cliente.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype.id,
  AsesorRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Asesor.prototype.id>;

  public readonly cliente: BelongsToAccessor<Cliente, typeof Asesor.prototype.id>;

  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Asesor, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
