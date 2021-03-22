/*--- Servidor Express para recibir y despachar solicitudes HTTP ---*/
// Temática del taller: Aplicación para 
// crear/desplegar Tweets. Cada tweet tendrá texto, arreglo de menciones y  arreglo de “hashtags”

// Setup inicial
require('dotenv').config();         // para poder acceder a la información en .env
const express = require('express');
const server = express();              // inicializar un servidor de express para recibir requests
const router = express.Router();    // ayuda a dirigir la solicitud recibida al código correcto
const port = 3010;   // puerto donde se corre el servidor. Todo servicio en tu compu requiere un servidor

// Dependencias

// Connexión a base de datos
const mongoose = require("mongoose");
const URI = "mongodb+srv://databaseUser:javascript-me@cluster0.8mmoe.mongodb.net/AuthTest?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});             // boilerplate code, siempre es igual

const db = mongoose.connection;
db.on('error', err => console.error(err));      // para detectar errores de conexión con db si los hay
db.once('open', ()=> console.log("Conexión con Mongo exitosa"));

// Middleware para el manejo de requests
server.use(express.json());        // el formato de los datos usados es JSON

// Modelos de la Base de Datos
const Tweet = require('./models/tweet.js');

/* ---RUTAS--- */
// Especifica el tipo de solicitud http: get o post
// GET: dame información
// POST: te mando información

server.get('/', function (req, res) {
    res.send("Bienvenido a la API de Twitter");
});

server.get('/feed', function(req, res) {
    res.send("Aquí desplegamos la lista de tweets!");
})

server.post('/', function(req, res) {
    // Subir un nuevo tweet
})

server.post('/:id', function(req, res){
    // borrar un tweet
})


server.listen(port, ()=> console.log("El servidor está corriendo en el puerto " + port));