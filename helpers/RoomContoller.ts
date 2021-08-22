import { Game } from '../game_instances/Game'
import { Player } from '../game_instances/Player'
import {CircleTable} from '../helpers/CircleTable'
import { createError, makeResponse } from './ResponseMaker'

export const allRooms: {
    [key: number] : Game
} = {}

export function createRoom(password: string, playerName: string):number {

    let gameId = createId()

    allRooms[gameId] = new Game(password, new CircleTable())

    // Do not check for result because it is the first player
    addPlayer(password, playerName, gameId)
    return gameId
}

export function addPlayer(password: string, playerName: string, gameId: number) {

    let chosenRoom = gameExist(gameId, password)

    if (typeof chosenRoom == 'string') return chosenRoom
    // Checking if we have a player with such name
    if (chosenRoom.players.getPlayer(playerName)) {
        return createError('player.exist')
    }

    chosenRoom.players.addPlayer(new Player(playerName))
    return {
        success: true
    }
}

export async function startGame(gameId: number, password: string):Promise<string> {

    let chosenRoom = gameExist(gameId, password)
    if (typeof chosenRoom == 'string') return chosenRoom

    let response: string
    try {
        const roomCreationResult = await chosenRoom.startGame()
        response = makeResponse(roomCreationResult)
    } catch (err) {
        response = createError(err.errorType)
    }
    return response

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

// If everything is correct, it returns a game entity
// otherwise an error JSON string
function gameExist(gameId: number, password: string): Game | string {
    if (gameId in allRooms) {
        let currentRoom = allRooms[gameId]
        if (currentRoom.password == password) {
            return currentRoom
        }
        return createError('room.password')
    } else {
        return createError('room.exist')
    }
}