const UsuariosModel = require('../models/usuarios');

class UsuariosController {
    static async indexGet(req, res) {
        let data = await UsuariosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await UsuariosModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    static async indexPost(req, res) {
        try {
            // Obtener datos del cuerpo de la solicitud
            const { nombre, fechaNacimiento, contrasena, correo } = req.body;
    
            // Crear un objeto con los datos necesarios
            const newData = {
                nombre,
                fechaNacimiento,
                contrasena,
                correo
            };
    
            // Llamar a la función insertar del modelo con los nuevos datos
            const insertedId = await UsuariosModel.insertar(newData);
    
            // Responder con un código de estado 201 Created y la ubicación del nuevo recurso
            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({ status: 201, message: 'Registro completado' });  // Cambia 'Created' por 'Registro completado'
        } catch (error) {
            // Manejar errores, enviar un código de estado 400 Bad Request en caso de error
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
    
    
}

module.exports = UsuariosController;