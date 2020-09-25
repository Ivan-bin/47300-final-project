const express = require('express')

// Create a router container
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Hello World'
    })
})