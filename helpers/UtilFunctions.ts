export function shuffle(array:Array<any>): Array<any> {
    let currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function deepFreeze(obj: Object): Object {
    let propNames = Object.getOwnPropertyNames(obj);
  
    propNames.forEach((name) => {
        let prop = obj[name];
  
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
  
    return Object.freeze(obj);
}