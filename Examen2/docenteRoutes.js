// routes/docenteRoutes.js
const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController');

// Rutas para el CRUD de docentes
router.post('/docentes', docenteController.createDocente);
router.get('/docentes', docenteController.getAllDocentes);

module.exports = router;
