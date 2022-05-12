//Fichero que contienen todos los manejadores de la aplicacion
//Mucho mas eficiente para el tema de las pruebas
const express = require('express');

//Crear la APP
const app = express();

//TODO:Configuracion de los manejadores
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

//La preparamps para exportarla
module.exports = app