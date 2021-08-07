import { Hero } from "./cards/hero_cards/Hero";
import { Role } from "./cards/roles/AbstractRole";

export class Player<T extends Hero, I extends Role> {
    constructor(
        public name: string = '',
        private currentHealth: number = 0,
        public playersHero: T | null = null,
        public role: I = null
    ) {}

    setHero(newHero: T) {
        this.currentHealth = newHero.health
        this.playersHero = newHero
    }
}