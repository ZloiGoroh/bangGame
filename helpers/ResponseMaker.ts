const errors = Object.freeze({
    ['room.exist']: 'roomNotExist',
    ['player.password']: 'wrongPassword',
    ['player.exist']: 'nameTaken',
})

export function createJSON(...objs: Object[]):string {
    return JSON.stringify(Object.assign({}, ...objs))
}

export function makeResponse<T extends Object>(responseObject : T) : string {
    return createJSON({success: true}, responseObject)
}

export function createError(errorType: string): string {
    return createJSON({success: false, error: errors[errorType]})
}