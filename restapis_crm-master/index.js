const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors');

// conectar mongo
mongoose.Promise = global.Promise;
const dbConnection = async() =>{

    try {
        await mongoose.connect('mongodb+srv://krisnaspiral:zoharrama@cluster0.1xx3fww.mongodb.net/?retryWrites=true&w=majority');
        console.log('base de datos on')

    } catch (error) {
        throw new Error('error a la hora al iniciar la base de datos')
    }
}

dbConnection()

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));

// puerto
app.listen(5000);