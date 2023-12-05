const {connectMysql} = require('../dbconnection');
class FamiliaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Familia');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Familia').where('id', id);
    }
}

module.exports = FamiliaModel;