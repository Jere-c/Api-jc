const db = require('./../config/db')

exports.getCursos = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM cursos');
    console.log(rows);
    return rows;
}

exports.getCursoById = async(CursoId)=>{
    const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE CursoId=?',[CursoId]);
    console.log(rows)
    return rows;
}

exports.addCurso = async(curso)=>{
    const [rows, fields] = await db.execute('INSERT INTO cursos (Nombre, Descripcion) VALUES (?,?)', [curso.Nombre , curso.Descripcion])
    console.log(rows);
    return rows;
}

exports.updateCurso = async(curso)=>{
    console.log('Modelo a seguir')
    console.log(curso);
    const [rows, fields] = await db.execute('UPDATE cursos SET Nombre = ?, Descripcion = ? WHERE CursoId = ?', [curso.Nombre, curso.Descripcion, curso.CursoId])
    return rows
}

exports.deleteCursorById = async(CursoId)=>{
    const [rows, fields] = await db.execute('DELETE from cursos WHERE CursoId = ?', [CursoId])
    return rows
}

exports.addEstudianteAUnCurso = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO `estudiantes_cursos` VALUE ( ?, ? )', [estudiante.estudiante_id, estudiante.id ]);
    return rows;
}