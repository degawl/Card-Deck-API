import {Model, model, property} from '@loopback/repository';

@model()
export class DeckInput extends Model {
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


  constructor(data?: Partial<DeckInput>) {
    super(data);
  }
}

export interface DeckInputRelations {
  // describe navigational properties here
}

export type DeckInputWithRelations = DeckInput & DeckInputRelations;
