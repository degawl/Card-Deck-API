import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {v4 as uuidv4} from 'uuid';
import {PgDataSource} from '../datasources';
import {Card, Deck, DeckRelations} from '../models';
import {DeckHelper} from './../helpers/DeckHelper';
import {DeckInput} from './../models/deck-input.model';

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

  async drawFromDeck(deckId: string, count: number): Promise<Card[]> {
    const deck = await super.findById(deckId);
    const cards = deck.cards;
    const drawnCards: Card[] = [];

    if (cards.length < count) {
      throw new Error("Not enough cards in deck to be drawn.")
    }

    for (let i = 0; i < count; i++) {
      drawnCards.push(cards.shift()!);
    }

    deck.remaining = deck.remaining - count;
    await super.replaceById(deck.deckId, deck);

    return drawnCards;
  }

  async createDeck(deckInput: DeckInput): Promise<Deck> {
    const cards = DeckHelper.createCardsArray(deckInput.type, deckInput.shuffled);
    const deck = await super.create({deckId: uuidv4(), shuffled: deckInput.shuffled, type: deckInput.type, remaining: cards.length, cards: cards});

    return new Deck({deckId: deck.deckId, shuffled: deck.shuffled, type: deck.type, remaining: deck.remaining});
  }
}
