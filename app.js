// Start === requiring express modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const path = require('path')
const app = express()
// === END

// Start === requiring files
const config = require('./config/config')
const user = require('./routes/user')
// === END

// Start === database connection
mongoose.connect(config.database)
mongoose.connection.on('connected', () => {
  console.log('Successfully connected to database')
})
mongoose.connection.on('error', (err) => {
  console.log(err)
})

// === END

// Start === Setting modules to use
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
require('./passport/passport')(passport)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// === END

// Start === Getting router and setting them
app.use('/user', user)

app.use(express.static(__dirname + '/public'))
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

// === END

// Start === setting PORT
app.listen(config.port, () => {
  console.log('Sever running on port ' + config.port)
})
// === END
