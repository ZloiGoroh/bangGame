import { Hero } from "../Hero";

export class MadDog extends Hero {
    constructor() {
        super(4, 'MadDog')
    }
}

// Раскрывает вторую взятую карту в фазе набора
// Если красная, берёт ещё одну карту