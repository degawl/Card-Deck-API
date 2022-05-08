import {
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, post, requestBody,
  response
} from '@loopback/rest';
import {Deck, DeckInput} from '../models';
import {DeckRepository} from '../repositories';
import {Card} from './../models/card.model';


export class DeckController {
  constructor(
    @repository(DeckRepository)
    public deckRepository : DeckRepository,
  ) {}

  @post('/decks')
  @response(200, {
    description: 'Deck model instance',
    content: {'application/json': {schema: getModelSchemaRef(DeckInput)}},
  })
  async create(@requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeckInput, {
            title: 'NewDeck',
          }),
        },
      },
    })
    deckInput: DeckInput,
  ): Promise<Deck> {
    return this.deckRepository.createDeck(deckInput);
  }

  @get('/decks/{id}')
  @response(200, {
    description: 'Deck model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Deck, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Deck, {exclude: 'where'}) filter?: FilterExcludingWhere<Deck>
  ): Promise<Deck> {
    return this.deckRepository.findById(id, filter);
  }

  @get('/decks/{id}/draw')
  @response(200, {
    description: 'Deck model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Deck, {includeRelations: true}),
      },
    },
  })
  async drawFromDeckById(
    @param.path.string('id') id: string,
    @param.query.integer('count', {required: true}) count: number
  ): Promise<Card[]> {
    return this.deckRepository.drawFromDeck(id, count);
  }
}
