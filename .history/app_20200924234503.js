const express = require('express')
// create server
const app = express() 

// art-template engine
app.engine('html', require('express-art-template'))

// static path
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(5000, (req, res) => {
    console.log('app is running at port 5000')
})