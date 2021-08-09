export type languages = 'en' | 'ru'

export type errorTypes = 
    'room.exist' |
    'room.password' |
    'room.players.count' |
    'player.exist'

type errors = {
    [key in errorTypes]: {
        [key in languages] : string
    }
}

export const errors: errors = Object.freeze({
    ['room.exist']: {
        en: 'This room does not exist',
        ru: 'Этой комнаты не существует'
    },
    ['room.password']: {
        en: 'You inputed wrong password',
        ru: 'Вы ввели не верный пароль'
    },
    ['room.players.count']: {
        en: 'Not enough players',
        ru: 'Недостаточно игроков'
    },
    ['player.exist']: {
        en: 'This name has been chosen',
        ru: 'Это имя уже существует'
    },
})
