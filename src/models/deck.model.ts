import {Entity, model, property} from '@loopback/repository';
import {DeckTypes} from '../enums/deckTypes.enum';
import {Card} from './card.model';

@model()
export class Deck extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deckId: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(DeckTypes)
    }
  })
  type: DeckTypes;

  @property({
    type: 'boolean',
    required: true,
  })
  shuffled: boolean;

  @property({
    type: 'number',
    required: true,
  })
  remaining: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: false,
  })
  cards: Card[];


  constructor(data?: Partial<Deck>) {
    super(data);
  }
}

export interface DeckRelations {
  // describe navigational properties here
}

export type DeckWithRelations = Deck & DeckRelations;
