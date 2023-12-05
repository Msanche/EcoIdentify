const {connectMysql} = require('../dbconnection');
class OrdenModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Orden');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Orden').where('id', id);
    }
}

module.exports = OrdenModel;