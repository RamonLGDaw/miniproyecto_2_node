//Rutas web

const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('index')
})

route.get('/galeria', (req, res) => {
    res.render('galeria')
})

module.exports = route;