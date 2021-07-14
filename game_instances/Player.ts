import { Hero } from "./cards/hero_cards/Hero";


export class Player<T extends Hero> {
    constructor(
        public playersHero: T,
        

    ) {}
}