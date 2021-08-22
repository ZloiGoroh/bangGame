// import { readdir } from "fs";
import { readDirectory } from "../../../helpers/UtilFunctions";
import { Hero } from "../hero_cards/Hero";
import { Deck } from "./Deck";

export class HeroesDeck<T extends Hero> extends Deck<T> {
    constructor() {
        let heroes : T[] = []
        readDirectory('game_instances/cards/hero_cards/default_heros').then(files => {
            files.forEach(file => {
                const heroClass = require(`${__dirname}/../hero_cards/default_heros/${file}`).default
                heroes.push(new heroClass())
            });
        })
        super(heroes)
    }
}