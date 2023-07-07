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
    check('Contraseña','La contraseña es obligatorio').not().isEmpty(),
    check('Contraseña','La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    validarCampos
], profesoresController.addProfesor);
router2.put('/:id',[
    check('Nombre','El Nombre es obligatorio').not().isEmpty(),
    check('Especialidad','La Especialidad es obligatiria').not().isEmpty(),
    check('Email','El Email es obligatorio').not().isEmpty(),
    check('Contraseña','La contraseña es obligatorio').not().isEmpty(),
    check('Contraseña','La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    validarCampos
],profesoresController.updateProfesor)
router2.delete('/:id', profesoresController.deleteProfesor)

module.exports = router2;