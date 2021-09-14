import { AbstractGameCard, cardSuit } from "../../AbstractGameCard";

export class Miss extends AbstractGameCard {
    constructor(cardSuit: cardSuit) {
        super('Miss', cardSuit)
    }
}