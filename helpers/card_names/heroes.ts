 export type languages = 'en' |'ru'

interface heronames {
    [key: string] : {
        [lang in languages]: string
    }
}

export const HERONAMES : heronames = {
    TomKetchum: {
        en: "Tom Ketchum",
        ru: "Том Кетчум"
    },
    LuckyLuke: {
        en: 'Lucky Luke',
        ru: 'Счастливчик Люк'
    },
    MadDog: {
        en: 'Mad Dog',
        ru: 'Бешеный Пёс'
    },
    SuziLafayette: {
        en: 'Suzi Lafayette',
        ru: 'Сюзи Лафайет'
    },
    Tuco: {
        en: 'Tuco',
        ru: 'Туко'
    },
    AngelsEyes: {
        en: 'Angels Eyes',
        ru: 'Ангельские Глазки'
    },
    BigSnake: {
        en: 'Big Snake',
        ru: 'Большой Змей'
    }
}