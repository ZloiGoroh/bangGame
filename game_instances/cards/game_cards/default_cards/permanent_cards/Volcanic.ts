import { AbstractGameCard, cardSuit } from "../../AbstractGameCard";

export class Volcanic extends AbstractGameCard {
    constructor(cardSuit: cardSuit) {
        super('Volcanic', cardSuit, true)
    }
}