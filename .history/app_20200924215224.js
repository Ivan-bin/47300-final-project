var express = require('express')
var app = express() // create server

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(5000, (req, res) => {
    console.log('app is running')
})