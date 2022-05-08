import {Model, model, property} from '@loopback/repository';
import {DeckTypes} from '../enums/deckTypes.enum';

@model()
export class DeckInput extends Model {
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


  constructor(data?: Partial<DeckInput>) {
    super(data);
  }
}

export interface DeckInputRelations {
  // describe navigational properties here
}

export type DeckInputWithRelations = DeckInput & DeckInputRelations;
