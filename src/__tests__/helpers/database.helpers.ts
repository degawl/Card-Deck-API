import {testdb} from '../fixtures/datasources/testdb.datasource';
import {DeckTypes} from './../../enums/deckTypes.enum';
import {Suits} from './../../enums/suits.enum';
import {Deck} from './../../models/deck.model';
import {DeckRepository} from './../../repositories/deck.repository';

export async function givenEmptyDatabase() {
  await new DeckRepository(testdb).deleteAll();
}

export function givenDeckData(data?: Partial<Deck>) {
  return Object.assign(
    {
      deckId: '1234',
      type: DeckTypes.SHORT,
      shuffled: true,
      remaining: 1,
      cards: [
        {
          'value': 'ACE',
          'suit': Suits.CLUBS,
          'code': 'AC'
        }
      ]
    },
    data,
  );
}

export function givenDeckCreateOutputData(data?: Partial<Deck>) {
  return Object.assign(
    {
      shuffled: true,
      remaining: 32,
    },
    data,
  );
}

export async function givenDeck(data?: Partial<Deck>) {
  return new DeckRepository(testdb).create(givenDeckData(data));
}

export async function givenDeckCreateOutput(data?: Partial<Deck>) {
  return new DeckRepository(testdb).create(givenDeckCreateOutputData(data));
}

