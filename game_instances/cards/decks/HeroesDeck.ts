import { readdir } from "fs";
import { Hero } from "../hero_cards/Hero";
import { Deck } from "./Deck";


interface absHero extends Hero {}

export class HeroesDeck extends Deck<absHero> {
    constructor() {
        let heroes:absHero[] = []
        readdir('../hero_cards/default_heros',(file) => {
            heroes.push(require(`../hero_cards/default_heros/${file}`))
        })
        super(heroes)
    }
}