const storage = require('./storage')

function agregarPais( cliente ) {
    return new Promise((resolve, reject) => {
        storage.agregar( cliente )
        resolve( cliente )
    })
}

module.exports = {
    agregarPais,
}