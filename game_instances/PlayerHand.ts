import { AbstractGameCard } from "./cards/game_cards/AbstractGameCard";

export class PlayerHand<Crd extends AbstractGameCard> {
    constructor(
        public cards: Crd[]
    ) {}
}