import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbsmartvehicle',
  connector: 'mongodb',
  url: 'mongodb+srv://davidfn11:eimiejere@clusterg35.xph7aec.mongodb.net/dbsmartv',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbsmartvehicleDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbsmartvehicle';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbsmartvehicle', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
