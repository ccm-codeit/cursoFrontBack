/*--- Servidor Express que simula la Twitter API---*/

// Setup inicial
require('dotenv').config();         // para poder acceder a la información en .env
const express = require('express');
const server = express();              // inicializar un servidor de express para recibir requests
const port = process.env.PORT || 3010;   // puerto donde se corre el servidor. Todo servicio en tu compu requiere un servidor

const cors = require('cors');       // para permitir comunicación entre dos distintos puertos

// Connexión a base de datos
const mongoose = require("mongoose");
const URI = process.env.CONNECTIONSTRING;
console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); // esto es "boilerplate code", siempre es igual

const db = mongoose.connection;
db.on('error', err => console.error(err));      // si hay evento de error notificalo
db.once('open', () => console.log("Conexión con Mongo exitosa"));  // una vez abierta la conexión notificalo

// Middleware, librerías que vamos a utilizar en el manejo de cada request
server.use(cors())
server.use(express.json());

// Modelos de la Base de Datos
const Tweet = require("./models/tweet.js");

/* ---RUTAS--- */
// GET: dame información
// POST: te mando información

// Dirección base
server.get("/", function (req, res) {
    res.send("Bienvenido a la API de Twitter");
});

// Obtener todos los tweets
server.get('/tweets', function (req, res) {
    // busca todos los tweets, cuando los tengas regrésamelos. Si hubo algún error, notificalo.
    Tweet.find()
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            console.log("Hubo error: " + err)
            res.status(500).json({ message: err.message });
        })
})

// Subir un nuevo tweet
server.post('/', function (req, res) {

    // Obten la información recibida en la request
    const newTweet = new Tweet({
        username: req.body.username,
        tweet: req.body.tweet,
        posted: req.body.posted,
    });

    // Guardalo a la base de datos, si hay problema notifícalo
    newTweet.save()
        .then(() => {
            res.status(201).send("Creado exitosamente:" + newTweet);
        })
        .catch((err) => {
            console.log("Hubo error: " + err);
            res.json(err);
        })
})

// Obtener tweets por autor
server.get('/tweets/:username', function (req, res) {
    const user = req.params.username;
    console.log("Buscando tweets del usuario: " + user);
    Tweet.find({ "username": user })
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            console.log("Hubo error:", err);
            res.json(err);
        })
})


server.listen(port, () => console.log("El servidor está corriendo en el puerto " + port));
