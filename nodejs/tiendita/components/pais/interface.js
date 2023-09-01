const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const ruta = express.Router()

ruta.post('/', function(req, res) {
    controller.agregarPais( req.body )
        .then((data) => response.success(req, res, data, 200) )
        .catch((error) => response.error(req, res, error, 500) )
})

module.exports = ruta 