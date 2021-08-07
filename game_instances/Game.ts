import { Player } from "./Player";
import { CircleTable } from "../helpers/CircleTable";
import { Hero } from "./cards/hero_cards/Hero";
import { RoleDeck } from "./cards/decks/RoleDeck";
import { Role } from "./cards/roles/AbstractRole";

interface abstractHero extends Hero {}
interface abstractRole extends Role {}
interface LocalPlayer extends Player<abstractHero,abstractRole> {}

export class Game {
    constructor (
        public password: string,
        public players: CircleTable<abstractRole, abstractHero, LocalPlayer>,
        public roles: RoleDeck = null
    ) {}

    startGame(): void {
        this.roles = new RoleDeck(this.players.elementsCount)
        this.players.each((player) => {
            player.role = this.roles.drawCard()
        })
    }
}