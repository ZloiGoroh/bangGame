export const allRooms = {}

export function createRoom(password: string):Number {
    let gameId = createId()
    allRooms[gameId] = {password}
    console.log(allRooms)
    return gameId
}

function createId(): number {

    // Server ports imitation
    let gameId: number = Math.trunc(Math.random() * 100000)

    // Searching for free port
    while (gameId in allRooms) {
        gameId = Math.trunc(Math.random() * 100000)
    }
    
    return gameId
}