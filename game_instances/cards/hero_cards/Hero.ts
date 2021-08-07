import { HERONAMES, languages } from "../../../helpers/card_names/heroes";

export class Hero {
    constructor (
        public health: number,
        readonly heroId: string,
        public language: languages = 'ru',
        readonly name: string = HERONAMES[heroId][language],
    ){}
}
