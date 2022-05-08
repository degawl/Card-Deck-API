import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Deck, DeckRelations} from '../models';

export class DeckRepository extends DefaultCrudRepository<
  Deck,
  typeof Deck.prototype.deckId,
  DeckRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Deck, dataSource);
  }
}
