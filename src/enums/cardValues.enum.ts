export enum FaceValues {
  ACE = 'A',
  KING = 'K',
  QUEEN = 'Q',
  JACK = 'J',
}

export enum HighValues {
  TEN = '10',
  NINE = '9',
  EIGHT = '8',
  SEVEN = '7'
}

export enum LowValues {
  SIX = '6',
  FIVE = '5',
  FOUR = '4',
  THREE = '3',
  TWO = '2'
}

export const CardValues = {...FaceValues, ...HighValues, ...LowValues}
