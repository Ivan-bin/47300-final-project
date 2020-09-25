const express = require('express')
const app = express() // create server

// static path
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(5000, (req, res) => {
    console.log('app is running at port 5000')
})