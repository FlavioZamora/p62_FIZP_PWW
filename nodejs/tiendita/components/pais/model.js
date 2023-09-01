const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    require: true
}

const pais_schema = new Schema({
    nombre: reqString,
})

const model = mongoose.model('Pais', pais_schema)

module.exports = model