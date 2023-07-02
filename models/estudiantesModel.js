const db = require('../config/db');

exports.getEstudiantes = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes');
    console.log(rows);
    return rows;
}

exports.getStudentById = async(EstudianteId)=>{
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE EstudianteId=?',[EstudianteId]);
    console.log(rows)
    return rows;
}

exports.addStudent = async(student)=>{
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (Nombre, Edad, Grado) VALUES (?,?,?)', [student.Nombre , student.Edad, student.Grado])
    console.log(rows);
    return rows;
}

exports.updateStudent = async(student)=>{
    console.log('Modelo')
    console.log(student);
    const [rows, fields] = await db.execute('UPDATE estudiantes SET Nombre = ?, Edad = ?, Grado = ? WHERE EstudianteId = ?', [student.Nombre , student.Edad, student.Grado, student.EstudianteId])
    return rows
}

exports.deleteStudentById = async(EstudianteId)=>{
    const [rows, fields] = await db.execute('DELETE from estudiantes WHERE EstudianteID = ?', [EstudianteId])
    return rows
}

exports.getCursosFromEstudiante = async(EstudianteId)=>{
    const[rows,fields] = await db.execute('SELECT cursos.Nombre, cursos.Descripcion FROM estudiantes_cursos INNER JOIN estudiantes ON estudiantes_cursos.id_estudiante = estudiantes.EstudianteId AND estudiantes.EstudianteId = ? INNER JOIN cursos ON estudiantes_cursos.id_curso = cursos.CursoId', [EstudianteId])
    return rows
}