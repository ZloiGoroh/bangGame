export interface cardSuit {
    suit: 'hearts' | 'peaks' | 'diamonds' | 'clubs',
    height: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'
}

export abstract class AbstractGameCard {
    constructor(
        readonly id: string,
        readonly suit: cardSuit,
        readonly permanent: boolean = false     // If it is blue card or not
    ) {}
}