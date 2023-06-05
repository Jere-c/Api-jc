const express = require('express');
const router = express.Router();
const estudiantesController = require('./../controllers/estudiantesController');

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getStudentById);
router.post('/', estudiantesController.addStudent);
router.put('/:id', estudiantesController.updateStudent);
router.delete('/:id', estudiantesController.deleteStudentById);

module.exports = router;