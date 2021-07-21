import { makeResponse } from "./helpers/ResponseMaker";
import { createRoom } from "./helpers/RoomContoller";

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser());

app.get('/', (req, res) => {
    res.send(makeResponse({msg: 'Some hello text'}))
})

app.post('/createRoom', (req, res) => {
    
    res.send(makeResponse({roomId: createRoom(req.body.password)}))
})

app.get('/startGame', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})