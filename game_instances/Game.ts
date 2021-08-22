import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";
import { RoleDeck } from "./cards/decks/RoleDeck";
import { Role } from "./cards/roles/AbstractRole";
import { HeroesDeck } from "./cards/decks/HeroesDeck";
import { errorTypes } from '../helpers/errors'
import { AbstractGameCard } from "./cards/game_cards/AbstractGameCard";

interface abstractHero extends Hero {}
interface abstractRole extends Role {}
interface abstractCard extends AbstractGameCard {}
interface LocalPlayer extends Player<abstractHero, abstractRole, abstractCard> {}

export class Game {
    constructor (
        public password: string,
        public players: CircleTable<abstractRole, abstractHero, abstractCard, LocalPlayer>,
        public roles: RoleDeck = null,
        public heroes: HeroesDeck<abstractHero> = new HeroesDeck()
    ) {}

    startGame(): Promise<{success: boolean, errorType?: errorTypes, game?: any}> {
        return new Promise((resolve, reject) => {
            if (this.players.elementsCount < 4) {
                reject({
                    success: false,
                    errorType: 'room.players.count'
                })
            } else {
                this.createGame()
                resolve({success: true, game: this})
            }
        })
    }

    createGame(): void {
        console.log('starting creating a game')
        this.roles = new RoleDeck(this.players.elementsCount)
        this.players.each((player) => {
            // setting role of the player
            player.role = this.roles.drawCard()

            //setting hero for player
            player.setHero(this.heroes.drawCard())
        })
        console.log('game created');
        
    }
}