const {connectMysql} = require('../dbconnection');
class DominioModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Dominio');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Dominio').where('id', id);
    }
}

module.exports = DominioModel;