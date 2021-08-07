import { makeResponse } from "./helpers/ResponseMaker";
import { createRoom, addPlayer } from "./helpers/RoomContoller";
import express = require('express');
import bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser());

app.get('/', (req, res) => {
    res.send(makeResponse({msg: 'Some hello text'}))
})

app.post('/createRoom', (req, res) => {   
    res.send(makeResponse({roomId: createRoom(req.body.password, req.body.name)}))
})


/*
Connect to the existed game
    body: {
        gameId : number - game identificator
        passowrd: string - password of the room
        name: string - username of the player
    }
*/
app.post('/connectToGame', (req, res) => {
    res.send(addPlayer(req.body.password, req.body.name, req.body.gameId))
})

app.get('/startGame', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})