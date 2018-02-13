const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! your user was registered! have fun!`
    })
})

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

var port = process.env.PORT || 8081
app.listen(port)
console.log('http://localhost:' + port)
