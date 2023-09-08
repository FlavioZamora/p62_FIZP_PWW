// models/docenteModel.js
const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
  cedula: String,
  nombre: String,
  apellido: String,
  telefono: String,
  correo_electronico: String,
  fecha_registro: Date,
});

module.exports = mongoose.model('Docente', docenteSchema);
