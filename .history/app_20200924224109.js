var express = require('express')
var app = express() // create server

// Access all the resources in pubic files
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(5000, (req, res) => {
    console.log('app is running at port 5000')
})