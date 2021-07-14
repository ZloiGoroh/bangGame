import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";

export class Game<T extends Hero> {
    constructor (
        public players: CircleTable<Player<T>> | null = null,
        
    ) {}
    
    

    startGame(): void {

    }
}