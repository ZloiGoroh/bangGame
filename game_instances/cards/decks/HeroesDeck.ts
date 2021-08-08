import { readdir } from "fs";
import { Hero } from "../hero_cards/Hero";
import { Deck } from "./Deck";

export class HeroesDeck<T extends Hero> extends Deck<T> {
    constructor() {
        let heroes : T[] = []
        readdir('../hero_cards/default_heros',(file) => {
            console.log('file name', file);
            
            heroes.push(require(`../hero_cards/default_heros/${file}`))
        })
        super(heroes)
    }
}