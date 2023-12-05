const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const ClaseController = require('./controllers/ClaseController');
const ComentarioController = require('./controllers/ComentarioController');
const DominioController = require('./controllers/DominioController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

//Usuario
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
//Clase
app.get('/Clase', ClaseController.indexGet);
app.get('/Clase/:id([0-9]+)', ClaseController.itemGet);
//Comentario
app.get('/comentario', ComentarioController.indexGet);
app.get('/comentario/:id([0-9]+)', ComentarioController.itemGet);
//Dominio
app.get('/dominio', DominioController.indexGet);
app.get('/dominio/:id([0-9]+)', DominioController.itemGet);
//Especie

//Familia

//Fotos

//Genero

//Orden

//Phyla

//Publicaciones

//Reinos


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});