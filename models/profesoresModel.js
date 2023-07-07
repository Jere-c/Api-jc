const db = require('./../config/db')
const hashlib = require('crypto')

const hashPassword = (Contraseña) => {
    const hash = hashlib.createHash('sha256');
    hash.update(Contraseña);
    return hash.digest('hex');
}


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
    const hashPass = hashPassword(profesor.Contraseña)
    const [rows, fields] = await db.execute('INSERT INTO profesores (Nombre, Especialidad, Email, Contraseña) VALUES (?,?,?,?)', [profesor.Nombre , profesor.Especialidad, profesor.Email, hashPass])
    console.log(rows);
    return rows;
}

exports.updateProfesor = async(profesor)=>{
    const hashPass = hashPassword(profesor.Contraseña)
    const [rows, fields] = await db.execute('UPDATE profesores SET Nombre = ?, Especialidad = ?, Email = ?, Contraseña=? WHERE ProfesorId = ?', [profesor.Nombre, profesor.Especialidad, profesor.Email,hashPass, profesor.ProfesorId])
    return rows
}

exports.deleteProfesorById = async(ProfesorId)=>{
    const [rows, fields] = await db.execute('DELETE from profesores WHERE ProfesorId = ?', [ProfesorId])
    return rows
}