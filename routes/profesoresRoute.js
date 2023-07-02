const express = require('express');
const router2 = express.Router();
const profesoresController = require('./../controllers/profesoresController');

const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos');




router2.get('/', profesoresController.getProfesores);
router2.get('/:id', profesoresController.getProfesorById);
router2.post('/',[
    check('Nombre','El Nombre es obligatorio').not().isEmpty(),
    check('Especialidad','La Especialidad es obligatiria').not().isEmpty(),
    check('Email','El Email es obligatorio').not().isEmpty(),
    validarCampos
], profesoresController.addProfesor);
router2.put('/:id',profesoresController.updateProfesor)
router2.delete('/:id', profesoresController.deleteProfesor)

module.exports = router2;