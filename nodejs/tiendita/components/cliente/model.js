const mongoose = require('mongoose')
const Schema= mongoose.Schema

const reqString = {
    type: String,
    require: true
}

const pais_schema = new Schema({
    nombre: reqString,
})

const ciudad_schema = new Schema({
    nombre: reqString,
    ref_pais: pais_schema,
})

const cliente_schema = new Schema({
    cedula: reqString, 
    nombre: reqString,
    apellido: reqString,
    ref_ciudad: ciudad_schema,
})

const model = mongoose.model('Cliente', cliente_schema)

module.exports = model