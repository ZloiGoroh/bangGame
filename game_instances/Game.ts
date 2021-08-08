import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";
import { RoleDeck } from "./cards/decks/RoleDeck";
import { Role } from "./cards/roles/AbstractRole";
import { HeroesDeck } from "./cards/decks/HeroesDeck";

interface abstractHero extends Hero {}
interface abstractRole extends Role {}
interface LocalPlayer extends Player<abstractHero,abstractRole> {}

export class Game {
    constructor (
        public password: string,
        public players: CircleTable<abstractRole, abstractHero, LocalPlayer>,
        public roles: RoleDeck = null,
        public heroes: HeroesDeck<abstractHero> = new HeroesDeck()
    ) {}

    startGame(): Promise<{success: boolean}> {
        return new Promise((resolve, reject) => {
            if (this.players.elementsCount < 4) {
                reject({
                    success: false,
                    errorType: 'players.count'
                })
            } else {
                this.createGame()
                resolve({success: true})
            }
        })
    }

    createGame(): void {
        this.roles = new RoleDeck(this.players.elementsCount)
        this.players.each((player) => {
            player.role = this.roles.drawCard()
            player.setHero(this.heroes.drawCard())
        })
    }
}