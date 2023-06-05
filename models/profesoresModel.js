const db = require('./../config/db')

exports.getProfesores = async ()=>{
    const [rows, fields] = await db.execute('SELECT * FROM profesores');
    console.log(rows);
    return rows;
}

exports.getProfesorById = async(ProfesorId)=>{
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE ProfesorId=?',[ProfesorId]);
    console.log(rows)
    return rows;
}

exports.addProfesor = async(profesor)=>{
    const [rows, fields] = await db.execute('INSERT INTO profesores (Nombre, Especialidad, Email) VALUES (?,?,?)', [profesor.Nombre , profesor.Especialidad, profesor.Email])
    console.log(rows);
    return rows;
}

exports.updateProfesor = async(profesor)=>{
    console.log('Modelo a seguir')
    console.log(profesor);
    const [rows, fields] = await db.execute('UPDATE profesores SET Nombre = ?, Especialidad = ?, Email = ? WHERE ProfesorId = ?', [profesor.Nombre, profesor.Especialidad, profesor.Email, profesor.ProfesorId])
    return rows
}

exports.deleteProfesorById = async(ProfesorId)=>{
    const [rows, fields] = await db.execute('DELETE from profesores WHERE ProfesorId = ?', [ProfesorId])
    return rows
}