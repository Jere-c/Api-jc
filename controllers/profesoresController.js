const profesoresModel = require('./../models/profesoresModel')

exports.getProfesores = async (req, res) => {
    try {
        const profesores = await profesoresModel.getProfesores();

        res.status(200).json({
            success: true,
            data: profesores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error al obtener profesores"
        })
    }
}

exports.getProfesorById = async (req, res) => {
    const idProfesor = req.params.id;
    try {
        const profesor = await profesoresModel.getProfesorById(idProfesor);
        if (profesor.length < 1) {
            return res.status(404).json({
                success: false,
                message: `Profesor id ${idProfesor} no encontrado.`
            })
        }
        res.status(200).json({
            success: true,
            profesor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos.`,
            error: error
        })
    }
}

exports.addProfesor = async (req, res) => {
    const profesorData = req.body;
    console.log('Data antes de insertarla' + profesorData)
    try {
        const profesor = await profesoresModel.addProfesor(profesorData);
        console.log(profesor)
        if (profesor.length < 1) {
            res.status(407).json({
                success: false,
                message: `Error al insertar profesor a la base de datos.`
            })
        }
        res.status(200).json({
            success: true,
            message: `Profesor insertado con exito.`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos`,
            error: error
        })
    }
}

exports.updateProfesor = async (req, res) => {
    const profesorData = req.body
    const ProfesorId = req.params.id

    const profesor = {
        ProfesorId,
        ...profesorData
    }

    console.log(profesor)

    try {
        const ListaActualizada = await profesoresModel.updateProfesor(profesor);

        if (ListaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: `Error al actualizar profesor.`
            })
        }
        res.status(200).json({
            success: true,
            message: `Profesor actualizado con exito.`,
            ListaActualizada
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos`,
            error: error
        })
    }
}

exports.deleteProfesor = async(req,res)=>{
    const idProfesor = req.params.id;
    try {
        const profesor = await profesoresModel.deleteProfesorById(idProfesor)
        if (profesor<1){
            res.status(404).json({
                success:false,
                message: `No existe tal profesor con id ${idProfesor}`
            })
        }
        res.status(200).json({
            success: true,
            message: `Se elimino el profesor id: ${idProfesor} con exito.`
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