import { shuffle } from "../../../helpers/UtilFunctions";

export abstract class Deck {
    constructor(
        private cards: any[],
        private discardPile: any[] = []   
    ) {
        this.cards = shuffle(cards)
    }

    public drawCard(): any {
        return this.cards.pop()
    }

    public discard(thrownCard: any) {
        this.discardPile.push(thrownCard)
    }
}