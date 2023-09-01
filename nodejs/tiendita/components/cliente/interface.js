const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const ruta = express.Router()

ruta.get('/', function(req, res) {
    const filtroCliente = req.query.cedula || null
    controller.obtenerClientes( filtroCliente )
        .then((data) => response.success(req, res, data, 200) )
        .catch((error) => response.error(req, res, error, 500) )
})

ruta.post('/', function(req, res) {
    controller.agregarCliente( req.body )
        .then((data) => response.success(req, res, data, 200) )
        .catch((error) => response.error(req, res, error, 500) )
})

ruta.put('/', function(req, res) {
    controller.actualizarCliente(req.body)
        .then((data) => response.success(req, res, data, 200) )
        .catch((error) => response.error(req, res, error, 500) )
})

ruta.delete('/', function(req, res) {
    controller.eliminarCliente(req.body.cedula)
        .then((data) => response.success(req, res, data, 200) )
        .catch((error) => response.error(req, res, error, 500) )
})

module.exports = ruta 