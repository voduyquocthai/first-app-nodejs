const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    const a = 1;
    res.send('Hello Thai! Let go')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})