import { Hero } from "../Hero";

export default class TomKetchum extends Hero {
    constructor() {
        super(4, 'TomKetchum')
    }
}

// В любой момент игры может сбросить 
// 2 карты чтобы восстановить 1 хп