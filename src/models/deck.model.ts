import {Entity, model, property} from '@loopback/repository';

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
  })
  type: string;

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
  })
  cards?: object[];


  constructor(data?: Partial<Deck>) {
    super(data);
  }
}

export interface DeckRelations {
  // describe navigational properties here
}

export type DeckWithRelations = Deck & DeckRelations;
