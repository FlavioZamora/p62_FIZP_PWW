const cliente = require('../components/cliente/interface')
const pais = require('../components/pais/interface')

const routes = function( server ) {
    server.use('/cliente', cliente)
    server.use('/pais', pais)
}

module.exports = routes