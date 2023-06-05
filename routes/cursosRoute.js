const express = require('express');
const router3 = express.Router();
const cursosController = require('./../controllers/cursosController')

router3.get('/', cursosController.getCursos)
router3.get('/:id', cursosController.getCursoById)
router3.post('/', cursosController.addCurso)
router3.put('/:id', cursosController.updateCurso)
router3.delete('/:id', cursosController.deleteCursoById)


module.exports = router3;