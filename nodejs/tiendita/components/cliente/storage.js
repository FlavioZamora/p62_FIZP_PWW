const model = require('./model')

async function agregarCliente( cliente ) {
    const objeto = await new model( cliente )
    const result = await objeto.save()
    return result
}

async function obtenerClientes( filtroCliente ) {
    let filtro = {}
    if (filtroCliente) {
        filtro = { cedula: filtroCliente }
    }
    const objeto = await model.find( filtro )
    return objeto
}

async function actualizarCliente( cliente ) {
    const objeto = await model.findOne( {cedula: cliente.cedula} )

    objeto.nombre = cliente.nombre
    objeto.apellido = cliente.apellido
    objeto.ref_ciudad = cliente.ciudad
    
    const result = await objeto.save()
    return result
}

async function eliminarCliente( cedula ) {
    const result = await model.deleteOne({cedula: cedula})
    return result
}

module.exports = {
    agregar: agregarCliente,
    obtener: obtenerClientes,
    actualizar: actualizarCliente,
    eliminar: eliminarCliente,
}