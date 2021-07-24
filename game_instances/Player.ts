import { Hero } from "./cards/hero_cards/Hero";


export class Player<T extends Hero> {
    constructor(
        public name: string,
        private currentHealth: number = 0,
        public playersHero: T | null = null,
    ) {}

    setHero(newHero: T) {
        this.currentHealth = newHero.health
        this.playersHero = newHero
    }
}