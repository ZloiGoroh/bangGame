import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";

export class Game {
    constructor (
        public password: string,
        public players: CircleTable<any> 
    ) {}

    startGame(): void {
        
    }
}
// export function createGame() {

// }