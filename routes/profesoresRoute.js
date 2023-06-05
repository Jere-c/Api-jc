const express = require('express');
const router2 = express.Router();
const profesoresController = require('./../controllers/profesoresController')


router2.get('/', profesoresController.getProfesores);
router2.get('/:id', profesoresController.getProfesorById);
router2.post('/', profesoresController.addProfesor);
router2.put('/:id',profesoresController.updateProfesor)
router2.delete('/:id', profesoresController.deleteProfesor)

module.exports = router2;