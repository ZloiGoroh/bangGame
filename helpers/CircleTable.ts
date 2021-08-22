import { Hero } from "../game_instances/cards/hero_cards/Hero"
import { Role } from "../game_instances/cards/roles/AbstractRole"
import { Player } from "../game_instances/Player"
import { AbstractGameCard } from "../game_instances/cards/game_cards/AbstractGameCard";


export class CircleTable<Rl extends Role, Hr extends Hero, Crd extends AbstractGameCard, T extends Player<Hr, Rl, Crd>> {
    constructor(
        public elements: Array<T> = []
    ) {}

    public addPlayer(player: T) {
        this.elements.push(player)
    }

    public get elementsCount(): number {
        return this.elements.length
    }

    public getPlayer(playerName: string): T | void {
        return this.elements.find((player => {
            return player.name === playerName
        }))
    }


    public each(
        handler: (arg0: T) => void, 
        condition: (arg: T) => boolean = () => true) {

        this.elements.forEach(player => {
            if (condition(player)) {
                handler(player)
            }
        })
    }
}