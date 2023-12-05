const {connectMysql} = require('../dbconnection');
class ComentarioModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Comentario');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Comentario').where('id', id);
    }
}

module.exports = ComentarioModel;