const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

//  Connect sequelize to database and create tables if not exist.
sequelize.sync({force: true})
    .then(() => {
        app.listen(config.port)
        console.log(`Server started. http://localhost:${config.port}`)
    })
