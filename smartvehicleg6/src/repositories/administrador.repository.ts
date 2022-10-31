import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbsmartvehicleDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Usuario, Asesor} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {AsesorRepository} from './asesor.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Administrador.prototype.id>;

  public readonly asesor: BelongsToAccessor<Asesor, typeof Administrador.prototype.id>;

  constructor(
    @inject('datasources.dbsmartvehicle') dataSource: DbsmartvehicleDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Administrador, dataSource);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
