import { AbstractGameCard, cardSuit } from "../../AbstractGameCard";

export class Beer extends AbstractGameCard {
    constructor(cardSuit: cardSuit) {
        super('Beer', cardSuit)
    }
}