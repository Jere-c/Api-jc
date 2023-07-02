const cursosModel = require('./../models/cursosModel')

//Los siguientes controladores se encargaran de la parte logica de la api.

exports.getCursos = async (req, res) => {
    //Evaluamos la logica dentro del bloque try.
    try {
        //Se obtienen los datos a traves del modelo.
        const cursos = await cursosModel.getCursos();
        //Si se obtienen de manera correcta, devolvemos un status 200 para indicar que todo esta ok y mostramos los datos.
        res.status(200).json({
            success: true,
            data: cursos
        })
    } catch (error) {
        //Si hay errores se capturan con el catch, muestra status 500 y mostramos el error por consola y al usuario.
        console.error(error);
        res.status(500).json({
            success: false,
            message: `Error al obtener los cursos.`
        })
    }
}

exports.getCursoById = async (req, res) => {
    // obtenemos la id enviada por el user.
    const idCurso = req.params.id

    try {
        //Se le pasa el id por parametro para buscar el curso que tenga esa id. 
        const curso = await cursosModel.getCursoById(idCurso)
        //Checkeamos que el curso exista.
        if (curso.length < 1) {
            res.status(404).json({
                success: false,
                message: `No se encontro curso con id ${idCurso}` //No se encuentra en la base
            })
        }
        //Si el curso existe y esta todo ok, lo muestra.
        res.status(200).json({
            success: true,
            curso
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: `Error al obtener estudiante` //Error al obtenerlo de la base
        })
    }
}

exports.addCurso = async (req, res) => {
    //Obtenemos la data ingresada por el user.
    const cursoData = req.body;
    console.log('Data antes de insertarla' + cursoData); //Se muestra la data antes de ingresarla.

    try {
        //Se le pasa la data al model para que pueda ser insertada.
        const curso = await cursosModel.addCurso(cursoData);
        console.log(curso)
        if (curso.length < 1) {
            res.status(407).json({
                success: false,
                message: `Error al insertar el curso a la base de datos.` //Error al ingresarlos, en la request.
            })
        }
        res.status(200).json({
            success: true,
            message: `Curso insertado con exito.` //Se ingreso y se podrá ver ya en la tabla.
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al obtener los datos`, //Error del lado de la base.
            error: error
        })
    }
}

exports.updateCurso = async (req, res) => {
    const cursoData = req.body
    const CursoId = req.params.id

    const curso = {
        CursoId,
        ...cursoData,
    }

    console.log(curso)

    try {
        const ListaActualizada = await cursosModel.updateCurso(curso)
        if (ListaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: `Error al actualizar curso.`
            })
        }
        res.status(200).json({
            success: true,
            message: `Curso actualizado con exito.`,
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

exports.deleteCursoById = async (req, res) => {
    //se guarda la id que ingreso el user
    const idCurso = req.params.id;
    try {
        const curso = await cursosModel.deleteCursorById(idCurso) //Se pasa esa id al model para que pueda borrarlo. 
        if (!curso) { //Se checkea si existe el curso, si no existe da el mensaje de error.
            res.status(404).json({
                success: false,
                message: `No existe el curso con id ${idCurso}`
            })
        }
        res.status(200).json({
            success: true,
            message: `Se elimino el curso id: ${idCurso} con exito.`
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

exports.addEstudianteAUnCurso = async (req, res) => {
    const id_curso = req.params.id;
    const cursoActualizado = req.body;

    const curso = {
        id_curso,
        ...cursoActualizado
    }
    console.log(curso)
    try {
        const listaActualizada = await cursosModel.addEstudianteAUnCurso(curso)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "No se agregaron los datos"
            })
        }
        res.status(200).json({
            success: true,
            message: "Estudiante agregado correctamente",
            curso
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}

exports.getEstudiantesFromCursos = async (req,res) => {
    const CursoId = req.params.id;
    try {
        const curso = await cursosModel.getEstudiantesFromCursos(CursoId)
  
        if(curso.length < 1){
            res.status(404).json({
                success: false,
                message: `no funca`
            })
        }
        res.status(200).json({
            success:true,
            curso
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'Error al obtener los datos'
        })
    }
}