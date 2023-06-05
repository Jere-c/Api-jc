const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('../routes/estudiantesRoute'); //Router de los Estudiantes
const router2 = require('../routes/profesoresRoute'); //Router de los Profesores
const router3 = require('../routes/cursosRoute'); //Router de los Cursos

class Server{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use('/api/cursos',router3)
        this.app.use('/api/profesores',router2)
        this.app.use('/api/estudiantes',router)
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen(){
        this.app.listen(3000, ()=>{
            console.log('Server is running on port 3000');
        })
    }
}

module.exports = Server;