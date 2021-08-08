import { errors, errorTypes, languages } from "./errors"

export function createJSON(...objs: Object[]):string {
    return JSON.stringify(Object.assign({}, ...objs))
}

export function makeResponse<T extends Object>(responseObject : T) : string {
    return createJSON({success: true}, responseObject)
}

export function createError(errorType: errorTypes, lang: languages = 'ru'): string {
    return createJSON({success: false, error: errors[errorType]})
}