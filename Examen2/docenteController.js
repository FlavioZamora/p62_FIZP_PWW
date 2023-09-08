// controllers/docenteController.js
const Docente = require('../models/docenteModel');

// Controlador para crear un nuevo docente
exports.createDocente = async (req, res) => {
  try {
    const docente = new Docente(req.body);
    await docente.save();
    res.status(201).json(docente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el docente' });
  }
};

// Controlador para obtener todos los docentes
exports.getAllDocentes = async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.status(200).json(docentes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los docentes' });
  }
};
