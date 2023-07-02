const express = require('express');
const router3 = express.Router();
const cursosController = require('./../controllers/cursosController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router3.get('/', cursosController.getCursos)
router3.get('/:id', cursosController.getCursoById)
router3.post('/',[
    check('Nombre','El Nombre es obligatorio').not().isEmpty(),
    check('Descripcion','La Descripción es obligatoria').not().isEmpty(),
    validarCampos
], cursosController.addCurso)
router3.put('/:id', cursosController.updateCurso)
router3.delete('/:id', cursosController.deleteCursoById)
router3.post('/:id/estudiantes', cursosController.addEstudianteAUnCurso);


module.exports = router3;