import {FaceValues, HighValues, LowValues} from '../enums/cardValues.enum';
import {DeckTypes} from '../enums/deckTypes.enum';
import {Suits} from '../enums/suits.enum';
import {Card} from '../models';


export class DeckHelper {
  public static createCardsArray(type: DeckTypes, shuffled: boolean) {
    let cards = [];
    for (const suit of Object.entries(Suits)) {
      for (const faceValue of Object.entries(FaceValues)) {
        cards.push(new Card({value: faceValue[0], suit: suit[0], code: faceValue[1] + suit[1]}));
      }

      for (const highValue of Object.entries(HighValues)) {
        cards.push(new Card({value: highValue[1], suit: suit[0], code: highValue[1] + suit[1]}));
      }

      if (type === DeckTypes.FULL) {
        for (const lowValue of Object.entries(LowValues)) {
          cards.push(new Card({value: lowValue[1], suit: suit[0], code: lowValue[1] + suit[1]}));
        }
      }
    }

    if (shuffled) {
      cards = this.shuffleCardsArray(cards);
    }

    return cards;
  }

  public static shuffleCardsArray(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
}
