const ComentarioModel = require('../models/comentario');

class ComentarioController {
    static async indexGet(req, res) {
        let data = await ComentarioModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await ComentarioModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
}

module.exports = ComentarioController;