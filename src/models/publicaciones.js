const {connectMysql} = require('../dbconnection');
class PublicacionesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Publicaciones');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Publicaciones').where('id', id);
    }
}

module.exports = PublicacionesModel;