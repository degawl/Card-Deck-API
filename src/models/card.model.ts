import {Model, model, property} from '@loopback/repository';

@model()
export class Card extends Model {
  @property({
    type: 'string',
    required: true,
  })
  value: string;

  @property({
    type: 'string',
    required: true,
  })
  suit: string;

  @property({
    type: 'string',
    required: true,
  })
  code: string;


  constructor(data?: Partial<Card>) {
    super(data);
  }
}

export interface CardRelations {
  // describe navigational properties here
}

export type CardWithRelations = Card & CardRelations;
