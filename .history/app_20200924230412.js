const express = require('express')
const app = express() // create server

// Access all the resources in pubic file
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(5000, (req, res) => {
    console.log('app is running at port 5000')
})