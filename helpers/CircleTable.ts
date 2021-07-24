import { Hero } from "../game_instances/cards/hero_cards/Hero"
import { Player } from "../game_instances/Player"


export class CircleTable<T extends Player<Hero>> {
    constructor(
        public elements: Array<T> = []
    ) {}

    public addPlayer(player: T) {
        this.elements.push(player)
    }


    public getPlayer(playerName: string): Player<Hero> | void {
        return this.elements.find((player => {
            return player.name === playerName
        }))
    }


    public each(
        handler: (arg0: T) => {}, 
        condition: (arg: T) => boolean = () => true) {

        this.elements.forEach(player => {
            if (condition(player)) {
                handler(player)
            }
        })
    }
}