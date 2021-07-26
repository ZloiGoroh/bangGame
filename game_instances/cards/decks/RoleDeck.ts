import { Role } from "../roles/AbstractRole";
import { Assistant } from "../roles/Assistant";
import { Bandit } from "../roles/Bandit";
import { Renegate } from "../roles/Renegate";
import { Sheriff } from "../roles/Sheriff";
import { Deck } from "./Deck";


export class RoleDeck<T extends Role> extends Deck {
    constructor(players: number) {
        let allRoles = [new Sheriff(), new Renegate(), new Bandit(), new Bandit(), new Assistant(), new Bandit(), new Assistant()]
        super(allRoles.splice(0, players))
    }
}