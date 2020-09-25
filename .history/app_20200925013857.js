const express = require('express')
const bodyParser = require('body-parser')

// create server
const app = express() 

// art-template engine
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// static path
app.use(express.static(__dirname + '/public'))
app.use('/node_modules/', express.static(__dirname + '/node_modules'))


app.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Hello World'
    })
})



app.listen(5000, (req, res) => {
    console.log('app is running at port 5000')
})