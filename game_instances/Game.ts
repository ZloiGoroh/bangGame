import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";
import { RoleDeck } from "./cards/decks/RoleDeck";
import { Role } from "./cards/roles/AbstractRole";
import { HeroesDeck } from "./cards/decks/HeroesDeck";
import { errorTypes } from '../helpers/errors'

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

    startGame(): Promise<{success: boolean, errorType?: errorTypes}> {
        return new Promise((resolve, reject) => {
            if (this.players.elementsCount < 4) {
                reject({
                    success: false,
                    errorType: 'room.players.count'
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
            // setting role of the player
            player.role = this.roles.drawCard()

            //setting hero for player
            player.setHero(this.heroes.drawCard())
        })
    }
}