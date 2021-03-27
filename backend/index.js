/*--- Servidor Express que simula la Twitter API---*/

// Setup inicial
const express = require('express');
const server = express();             
const port = 3010;   

// Connexión a base de datos
const mongoose = require("mongoose");
const URI = "mongodb+srv://dbUser:<password>@cluster0.tyuzw.mongodb.net/Twitter?retryWrites=true&w=majority";
console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 

const db = mongoose.connection;
db.on('error', err => console.error(err));      
db.once('open', () => console.log("Conexión con Mongo exitosa"));  

// Middleware, librerías que vamos a utilizar en el manejo de cada request
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
    Tweet.find({})
    .sort({posted: 'desc'})
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
    const newTweet = new Tweet({
        username: req.body.username,
        tweet: req.body.tweet,
        posted: req.body.posted,
    });
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
