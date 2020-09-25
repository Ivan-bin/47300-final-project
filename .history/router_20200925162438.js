const express = require('express')
const mongoose = require('mongoose')

// Create a router container
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Hello World'
    })
})

// export module
module.exports = router