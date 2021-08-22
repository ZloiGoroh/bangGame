import { Hero } from "./cards/hero_cards/Hero";
import { Role } from "./cards/roles/AbstractRole";
import { PlayerHand } from "./PlayerHand";
import { AbstractGameCard } from "./cards/game_cards/AbstractGameCard";

export class Player<T extends Hero, I extends Role, Crd extends AbstractGameCard> {
    constructor(
        public name: string = '',
        private currentHealth: number = 0,
        public playersHero: T | null = null,
        public role: I = null,
        public hand: PlayerHand<Crd> = null,
    ) {}

    setHero(newHero: T) {
        this.currentHealth = newHero.health
        this.playersHero = newHero
    }
}