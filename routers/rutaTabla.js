const express = require('express')
const route = express.Router()

//En esta parte de la ruta se deja solo la '/'. Hay que averiguar el motivo
route.get('/', (req, res)=>{
    res.render('tabla',{miArray:[
        {id:1, nombre:'Trastu', edad:15, especie:'perro'},
        {id:2, nombre:'Croqueta', edad:8, especie:'perro'},
        {id:3, nombre:'Cobayito', edad:4, especie:'cobayo'},
        {id:4, nombre:'Mixeta', edad:'??', especie:'gata'},
    ]})
})

module.exports = route;