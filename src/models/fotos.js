const {connectMysql} = require('../dbconnection');
class FotosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Fotos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Fotos').where('id', id);
    }
}

module.exports = FotosModel;