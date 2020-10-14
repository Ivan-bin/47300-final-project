const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const path = require('path')
const cors = require('cors')
const crypto = require("crypto");
const favicon = require('serve-favicon')

// create server
const app = express(); 

// models - User
const User = require('./models/user')

// LocalStrategy
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

// require router.js
const router = require('./router')
const user = require('./user')

// art-template engine
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// static path
app.use(express.static(__dirname + '/public'))
app.use('/node_modules/', express.static(__dirname + '/node_modules'))

app.use(cors());

// initialize the passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 


// flash message
// app.use(flash());

// calling router.js
app.use(router)
app.use(user)



app.listen(5000, (req, res) => {
    console.log('47300 is running at port 5000')
})