import {Model, model, property} from '@loopback/repository';
import {CardValues} from '../enums/cardValues.enum';
import {Suits} from '../enums/suits.enum';

@model()
export class Card extends Model {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(CardValues)
    }
  })
  value: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.keys(Suits)
    }
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
