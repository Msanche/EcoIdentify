const {connectMysql} = require('../dbconnection');
class ReinosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Reinos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Reinos').where('id', id);
    }
}

module.exports = ReinosModel;