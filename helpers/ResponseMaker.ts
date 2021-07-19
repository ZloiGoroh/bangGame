export function makeResponse<T extends Object>(responseObject : T) : string {
    return JSON.stringify(Object.assign({success: true}, responseObject))
}