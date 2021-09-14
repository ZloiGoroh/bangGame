import { AbstractGameCard, cardSuit } from "../../AbstractGameCard";

export class Bang extends AbstractGameCard {
    constructor(cardSuit: cardSuit) {
        super('Bang', cardSuit)
    }
}