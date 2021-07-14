const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, postgres, i love nodejs')
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})