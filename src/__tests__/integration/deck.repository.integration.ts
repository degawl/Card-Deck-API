import {expect} from '@loopback/testlab';
import {DeckTypes} from '../../enums/deckTypes.enum';
import {testdb} from '../fixtures/datasources/testdb.datasource';
import {givenDeck, givenEmptyDatabase} from '../helpers/database.helpers';
import {DeckInput} from './../../models/deck-input.model';
import {DeckRepository} from './../../repositories/deck.repository';

describe('DeckRepository (integration)', () => {
  beforeEach(givenEmptyDatabase);

  describe('createDeck()', () => {
    it('creates a deck', async () => {
      const repository = new DeckRepository(testdb);
      await repository.createDeck({'type': DeckTypes.FULL, 'shuffled': true} as DeckInput);
      const decks = await repository.find();
      expect(decks.length).to.aboveOrEqual(1);
    });
  });

  describe('findById(id)', () => {
    it('return the correct deck', async () => {
      const deck = await givenDeck({deckId: '1234'});
      const repository = new DeckRepository(testdb);
      const found = await repository.findById('1234');
      expect(found).to.deepEqual(deck);
    });
  });

  describe('drawFromDeck(deckId, count)', () => {
    it('Draws cards from deck', async () => {
      const deck = await givenDeck({deckId: '1234'});
      const repository = new DeckRepository(testdb);
      const found = await repository.drawFromDeck('1234', 1);
      expect(found).to.deepEqual(deck.cards);
    });
  });
});
