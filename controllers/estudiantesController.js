const estudiantesModel = require('./../models/estudiantesModel');

exports.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiantesModel.getEstudiantes();

        res.status(200).json({
            success: true,
            data: estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: `Error al obtener estudiantes.`
        })
    }
}

exports.getStudentById = async (req, res) => {
    const idStudent = req.params.id;
    try {
        const estudiante = await estudiantesModel.getStudentById(idStudent);
        if (estudiante.length < 1) {
            return res.status(404).json({
                success: false,
                message: `Estudiante id ${idStudent} no encontrado`
            })
        }
        res.status(200).json({
            success: true,
            estudiante
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: `Error al obtener estudiante`
        })
    }
}

exports.addStudent = async (req, res) => {
    const studentData = req.body;
    console.log('Data antes de insertarla' + studentData);
    try {
        const student = await estudiantesModel.addStudent(studentData);
        console.log(student)
        if (student.length < 1) {
            res.status(407).json({
                success: false,
                message: `Error al insertar el estudiante a la base de datos.`
            })
        }
        res.status(200).json({
            success: true,
            message: `Estudiante insertado con exito.`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos`,
            error: error
        })
    }
}

exports.updateStudent = async (req, res) => {
    const Estudianteid = req.params.id
    const studentData = req.body

    const student = {
        Estudianteid,
        ...studentData
    }

    console.log(student)

    try {
        const ListaActualizada = await estudiantesModel.updateStudent(student);

        if (ListaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: `Error al actualizar estudiante.`
            })
        }
        res.status(200).json({
            success: true,
            message: `Estudiante actualizado con exito.`,
            ListaActualizada
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos.`,
            error: error
        })
    }
}

exports.deleteStudentById = async (req, res) => {
    const idStudent = req.params.id;

    try {
        const student = await estudiantesModel.deleteStudentById(idStudent)

        if (!student) {
            res.status(404).json({
                success: false,
                message: `No existe tal estudiante con id ${idStudent}`
            })
        }

        res.status(200).json({
            success: true,
            message: `Se elimino el estudiante id: ${idStudent} con exito.`
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error al obtener datos`,
            error: error
        })
    }
}