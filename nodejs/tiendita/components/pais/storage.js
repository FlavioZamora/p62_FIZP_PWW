const model = require('./model')

async function agregarPais( cliente ) {
    const objeto = await new model( cliente )
    const result = await objeto.save()
    return result
}

module.exports = {
    agregar: agregarPais,
}