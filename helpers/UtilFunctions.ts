const fs = require('fs')

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

// add path to the directory from root of the project
export function readDirectory(directory: string):Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readdir(__dirname + '/../' + directory, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    }) 
}