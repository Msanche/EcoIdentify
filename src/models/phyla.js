const {connectMysql} = require('../dbconnection');
class PhylaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Phyla');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Phyla').where('id', id);
    }
}

module.exports = PhylaModel;