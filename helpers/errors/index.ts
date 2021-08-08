export type languages = 'en' | 'ru'

export type errorTypes = 
    'room.exist' |
    'player.password' |
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
    ['player.password']: {
        en: 'You inputed wrong password',
        ru: 'Вы ввели не верный пароль'
    },
    ['player.exist']: {
        en: 'This name has been chosen',
        ru: 'Это имя уже существует'
    },
})
