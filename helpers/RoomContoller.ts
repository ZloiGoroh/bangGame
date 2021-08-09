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
/*
    // Checking if room does exist
    if (!(gameId in allRooms)) {
        return createError('room.exist')
    }

    let chosenRoom = allRooms[gameId]

    // Checking for password
    if (chosenRoom.password !== password) {
        return createError('room.password')
    }
*/
    // Checking if we have a player with such name
    if (chosenRoom.players.getPlayer(playerName)) {
        return createError('player.exist')
    }

    chosenRoom.players.addPlayer(new Player(playerName))
    return {
        success: true
    }
}

export function startGame(gameId: number, password: string) {

    let chosenRoom = gameExist(gameId, password)
    if (typeof chosenRoom == 'string') return chosenRoom

    chosenRoom.startGame().then(res => {
        return makeResponse({message: 'Game sucessfully created'})
    }).catch(err => {
        return createError(err.errorType)
    })

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