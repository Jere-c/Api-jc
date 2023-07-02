const express = require('express');
const router = express.Router();
const estudiantesController = require('./../controllers/estudiantesController');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getStudentById);
router.post('/',[
    check('Nombre','El Nombre es obligatorio').not().isEmpty(),
    check('Edad','La Edad es obligatirio').not().isEmpty(),
    check('Grado','El Grado es obligatorio').not().isEmpty(),
    validarCampos
], estudiantesController.addStudent);
router.put('/:id', estudiantesController.updateStudent);
router.delete('/:id', estudiantesController.deleteStudentById);
router.get('/:id/cursos',estudiantesController.getCursosFromEstudiantes)

router.get('/buscar', (req,res) => {
    const searchTerm = req.params.busqueda
})


module.exports = router;