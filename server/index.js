const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')


const apiPort = 3000


const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
