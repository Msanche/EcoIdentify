const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const ClaseController = require('./controllers/ClaseController');
const ComentarioController = require('./controllers/ComentarioController');
const DominioController = require('./controllers/DominioController');
const EspecieController = require('./controllers/Especie');
const FamiliaController = require('./controllers/FamiliaController');
const FotosController = require('./controllers/FotosController');
const GeneroController = require('./controllers/GeneroController');
const OrdenController = require('./controllers/OrdenConroller');
const PhylaController = require('./controllers/PhylaController');
const PublicacionesController = require('./controllers/PublicacionesController');
const ReinosController = require('./controllers/ReinosController');

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
app.get('/especie', EspecieController.indexGet);
app.get('/especie/:id([0-9]+)', EspecieController.itemGet);
//Familia
app.get('/Familia', FamiliaController.indexGet);
app.get('/Familia/:id([0-9]+)', FamiliaController.itemGet);
//Fotos
app.get('/Fotos', FotosController.indexGet);
app.get('/Fotos/:id([0-9]+)', FotosController.itemGet);
//Genero
app.get('/Genero', GeneroController.indexGet);
app.get('/Genero/:id([0-9]+)', GeneroController.itemGet);
//Orden
app.get('/Orden', OrdenController.indexGet);
app.get('/Orden/:id([0-9]+)', OrdenController.itemGet);
//Phyla
app.get('/Phyla', PhylaController.indexGet);
app.get('/Phyla/:id([0-9]+)', PhylaController.itemGet);
//Publicaciones
app.get('/Publicaciones', PublicacionesController.indexGet);
app.get('/Publicaciones/:id([0-9]+)', PublicacionesController.itemGet);
//Reinos
app.get('/Reinos', ReinosController.indexGet);
app.get('/Reinos/:id([0-9]+)', ReinosController.itemGet);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});