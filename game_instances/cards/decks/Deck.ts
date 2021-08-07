import { shuffle } from "../../../helpers/UtilFunctions";

export abstract class Deck<T> {
    constructor(
        private cards: T[],
        private discardPile: T[] = []   
    ) {
        this.cards = shuffle(cards)
    }

    public drawCard(): T {
        return this.cards.pop()
    }

    public discard(thrownCard: T) {
        this.discardPile.push(thrownCard)
    }
}