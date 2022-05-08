import {juggler} from '@loopback/repository';

export const testdb: juggler.DataSource = new juggler.DataSource({
  name: 'pg',
  connector: 'postgresql',
  url: 'postgres://postgres:postgres@db/postgres',
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'postgres'
});
