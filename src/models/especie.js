const {connectMysql} = require('../dbconnection');
class EspecieModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Especie');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Especie').where('id', id);
    }
}

module.exports = EspecieModel;