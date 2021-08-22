import { AbstractGameCard } from "../game_cards/AbstractGameCard";
import { Deck } from "./Deck";

export class GameCardDeck<Crd extends AbstractGameCard> extends Deck<Crd> {
    constructor() {
        super([])
    }
}